const ceaserCipher = (code, key) => {
  if (typeof key !== "number") return "Key is NaN";
  if (key === 0) return code;
  return code.replace(/[a-z]/g, (char) =>
    String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26) + 97)
  );
};
export default ceaserCipher;
