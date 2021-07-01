const calculator = {
  add: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Not a number";
    }
    return x + y;
  },
  sub: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Not a number";
    }
    return x - y;
  },
  mul: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Not a number";
    }
    return x * y;
  },
  div: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      return "Not a number";
    } else {
      if (x === 0 || y === 0) return "Impossible 0";
      return x / y;
    }
  },
};

export default calculator;
