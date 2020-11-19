const clamp = (min, max, val) => Math.min(Math.max(val, min), max);

export function SET_RUNNING(value) {
  return ({ set }) => set('running', value);
}

export function NEXT_TICK({ rate, dt }) {
  return ({ update }) => {
    update('t', t => t + dt)
    update('level', level => clamp(0, 5, level + rate * dt));
  }
}

export function OBSERVATION() {
  return ({ update, get }) => {
    const { t, level } = get();
    update('data', data => data.concat({ t, level }));
  }
}

export function RESET(state) {
  return ({ set }) => set(state);
}
