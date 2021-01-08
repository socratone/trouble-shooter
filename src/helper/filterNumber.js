const numbers = { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1 };

const filterNumber = text => {
  let number = '';
  for (let i = 0; i < text.length; i++) {
    if (numbers[text[i]]) number += text[i];
  }
  if (number.length > 0) return Number(number);
  return 0;
};

export default filterNumber;