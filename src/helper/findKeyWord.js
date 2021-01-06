const findKeyWord = text => {
  let keyWord = '';
  let i = text.length - 1;

  while (i >= 0) {
    if (text[i] === ' ' || text[i] === '' || text[i] === '\n') break;
    keyWord = text[i] + keyWord;
    i--;
  }

  return keyWord;
};

export default findKeyWord;