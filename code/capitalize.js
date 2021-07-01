const capitalize = (string) => {
  if (string.lenght === 0) return "";

  const capital = string.toLowerCase();
  return capital.charAt(0).toUpperCase() + capital.slice(1);
};

export default capitalize;
