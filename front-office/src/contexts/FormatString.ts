import { stringHasNumbers } from '../constants/helpers/stringHasNumbers';

export const formatString = (str: string): string => {
  try {
    // Get all words
    const words = str.split(' ');
    return words
      .map((word) => {
        // Split the words into characters
        let lastLetterFailed = false;
        return word
          .split('')
          .map((char, index) => {
            // Make first character uppercase
            if (index === 0 || lastLetterFailed) {
              lastLetterFailed = stringHasNumbers(char);
              return char.toUpperCase();
            }
            // Make all other characters lowercase
            return char.toLowerCase();
          })
          .join('');
      })
      .join(' ');
  } catch (error) {
    return str;
  }
};
