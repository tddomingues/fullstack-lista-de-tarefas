export const firstCapitalLetter = (word) => {
  const firstLetter = word.split(" ")[0].slice(0, 1).toUpperCase();
  const restOfTheWord = word.split(" ")[0].slice(1);

  const formattedLetter = firstLetter.concat(restOfTheWord);

  return formattedLetter;
};
