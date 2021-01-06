const validateOperator = char => {
  if (
    char === '(' || 
    char === ')' || 
    char === '{' || 
    char === '}' || 
    char === ';' 
  ) return true;
  return false;
};

export default validateOperator;