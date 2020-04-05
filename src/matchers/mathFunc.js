const sum = (...args) => {
  return args.reduce((prev, current) => {
    return prev + current;
  });
};
const normalizeValue = (value, min = 0, max = 100) =>
  value < min ? min : value > max ? max : value;

export default { sum, normalizeValue };
