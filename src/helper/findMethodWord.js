import validateAlphabet from './validateAlphabet';

const findMethodWord = text => {
  let methodWord = '';
  let i = text.length - 1;

  while (i >= 0) {
    if (!validateAlphabet(text[i])) break;
    methodWord = text[i] + methodWord;
    i--;
  }

  if (text[i] === '.' || text[i] === ' ') return methodWord;
  return ''
};

export default findMethodWord;