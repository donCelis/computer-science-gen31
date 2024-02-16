export const getLetters = (text = "D") => {
  return text
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0] || "")
    .join("");
};
