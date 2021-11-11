const on = jest.fn (({ eventType, listenerFunction }) => ({
  eventType,
  listenerFunction,
}));

const off = jest.fn (({ eventType, listenerFunction }) => ({
  eventType,
  listenerFunction,
}));

module.exports = {
  useRouter: () => ({
    route: '/',
    pathname: '/',
    asPath: '/',
    query: {},
    replace: jest.fn (),
    events: {
      on,
      off,
    },
  }),
};
