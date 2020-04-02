const arrayToObject = arr => {
  const val = arr.reduce((prev, curr) => {
    return {
      ...prev,
      [curr]: curr
    };
  }, {});

  return val;
};

export default arrayToObject;
