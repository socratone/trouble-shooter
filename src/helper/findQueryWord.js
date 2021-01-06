const findQueryWord = text => {
  let queryWord = '';
  let i = text.length - 1;

  while (i >= 0) {
    // 첫 번째 공백은 넘어간다.
    if (i === text.length - 1) {
      queryWord = text[i] + queryWord;      
    } else {
      if (text[i] === ' ' || text[i] === '' || text[i] === '\n') break;
      queryWord = text[i] + queryWord;
    }
    i--;
  }

  return queryWord;
};

export default findQueryWord;