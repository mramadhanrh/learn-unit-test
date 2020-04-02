const arrayToObject = arr => {
  if (!Array.isArray(arr)) return {};
  const val = arr.reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: curr
    };
  }, {});

  return val;
};

export default arrayToObject;
