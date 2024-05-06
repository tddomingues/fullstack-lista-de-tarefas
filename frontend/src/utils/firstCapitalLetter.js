export const firstCapitalLetter = (words = " ") => {
  const letters = words.split(" ");

  const wordListUpperCase = letters.map((letter) => {
    let firstLetter, restOfTheWords;
    restOfTheWords = letter.slice(1).toLocaleLowerCase();
    letter.length === 1
      ? (firstLetter = letter.slice(0, 1).toLocaleLowerCase())
      : (firstLetter = letter.slice(0, 1).toUpperCase());

    return firstLetter + restOfTheWords;
  });

  return wordListUpperCase.join(" ");
};
