
export { default as slider } from "~ellx-hub/lib/components/Slider";
export { default as button } from "~ellx-hub/lib/components/Button";
export { plot } from "~ellx-hub/plot";

export const encoding = (root, vl) => root
  .encode(
    vl.x().fieldQ('t').scale({domain: [0, 120]}).axis({title: 'Elapsed'}),
    vl.y().fieldQ('level').scale({domain: [0, 5]}).axis({title: 'Tank level'})
  )

import Input from "~ellx-hub/lib/components/Input";
import ellxify from "~ellx-hub/lib/utils/svelte";
import Tank from "/Tank.svelte";

import Store from "~ellx-hub/lib/utils/store";
import { writable } from "svelte/store";
import { tx } from 'tinyx';

import {
  SET_RUNNING,
  NEXT_TICK,
  OBSERVATION,
  RESET,
} from './mutations.js';

export { subscribe } from './subscribe.js';

export const input = props => Input({ ...props, type: "number", min: 0 });

export const tank = ellxify(Tank);

const initialState = {
  running: false,
  t: 0.,
  level: 2.5,
  data: [{ t: 0., level: 2.5 }]
};

export const store = {
  ...tx(writable(initialState)),
  __EllxMeta__: { component: Store }
};

const pump = (kp, taup) => (m, currentLevel) => (kp * m - currentLevel) / taup;
export const mypump = pump(0.2, 5);

const outflowScale = 0.2;

const outflowPattern = [
  [50, 10],
  [300, 14],
  [300, 6],
  [50, 5],
  [300, 12],
  [200, 10]
].map((x) => Array(x[0]).fill(x[1])).flat();

let inletFlowRate = 50;
export const setInletFlowRate = value => inletFlowRate = value;

const dt = 0.1;
const feedbackInterval = 2;  // new reading every 2 seconds

function tick() {
  const { t, level, data } = store.get();

  const rate = mypump(inletFlowRate, level) - (outflowPattern[t / dt | 0] || 10.) * outflowScale;

  store.commit(NEXT_TICK, { rate, dt });

  if (t + dt - data[data.length - 1].t > feedbackInterval - 1e-8) {
    store.commit(OBSERVATION);
  }
}

export function start() {
  if (store.get('running')) return;

  store.commit(SET_RUNNING, setInterval(tick, dt * 1000));
}

export function stop() {
  const running = store.get('running');
  if (!running) return;

  clearInterval(running);

  store.commit(SET_RUNNING, false);
}

export function reset() {
  stop();
  store.commit(RESET, initialState);
}
