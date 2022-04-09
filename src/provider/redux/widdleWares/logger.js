export const logger = store => next => action => {
  console.group(action.type);
  console.info('dispaching', action);
  console.info('store', store.getState());
  console.groupEnd(action.type);

  return next(action);
};
