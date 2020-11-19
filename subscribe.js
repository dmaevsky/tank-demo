// This component calls an action imperatively on each props change and outputs its result

class Subscribe {
  constructor(props, { output }) {
    this.update = ({ action, source }) => output(action(source));
    this.update(props);
  }
}

export const subscribe = (source, action) => ({
  source, action,
  __EllxMeta__: { component: Subscribe }
});
