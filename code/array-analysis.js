const analyze = (array) => {
  if (array.lenght === 0) return "Empty array";

  const average = array.reduce((acc, cv) => acc + cv) / array.length;

  const min = Math.min(...array);

  const max = Math.max(...array);

  const lenghtOfArray = parseInt(array.length);

  return {
    average: average,
    min: min,
    max: max,
    length: lenghtOfArray,
  };
};

export default analyze;
