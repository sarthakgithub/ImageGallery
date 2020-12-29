export const apiTypeCreator = (type) => {
  return {
    [type]: {
      FETCH: `${type}_FETCH`,
      SUCCESS: `${type}_SUCCESS`,
      ERROR: `${type}_ERROR`,
      RESET: `${type}_RESET`
    }
  };
};

export const actionCreator = (type) => (payload) => {
  return {
    type,
    payload
  };
};
