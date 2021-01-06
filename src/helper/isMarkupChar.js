const isMarkupChar = char => {
  if (
    char === '<' || 
    char === '>' || 
    char === '/'
  ) return true;
  return false;
};

export default isMarkupChar;