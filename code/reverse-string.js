const reverString = (string) => {
  if (string.lenght === 0) return "";
  return string.split("").reverse().join("");
};
export default reverString;
