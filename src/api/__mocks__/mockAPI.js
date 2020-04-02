import classesMock from "./classes.json";

const getClassList = () => {
  new Promise(resolve => {
    resolve(classesMock);
  });
};

export { getClassList };
