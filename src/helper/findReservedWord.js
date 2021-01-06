const findReservedWord = ({ text, nextChar }) => {
  if (nextChar !== undefined && nextChar !== ' ') return '';

  if (text.length >= 9) {
    const preChar = text.slice(-8, -9);
    if (preChar === ' ' || preChar === '' || preChar === '\n') {
      const nineChars = text.slice(-9);
      if (nineChars === 'protected') return 'protected';
    }
  }

  if (text.length >= 8) {
    const preChar = text.slice(-7, -8);
    if (preChar === ' ' || preChar === '' || preChar === '\n') {
      const eightChars = text.slice(-8);
      if (eightChars === 'function') return 'function';
      if (eightChars === 'continue') return 'continue';
    }
  }

  if (text.length >= 7) {
    const preChar = text.slice(-6, -7);
    if (preChar === ' ' || preChar === '' || preChar === '\n') {
      const sevenChars = text.slice(-7);
      if (sevenChars === 'private') return 'private';
      if (sevenChars === 'finally') return 'finally';
      if (sevenChars === 'extends') return 'extends';
      if (sevenChars === 'default') return 'default';
    }
  }

  if (text.length >= 6) {
    const preChar = text.slice(-7, -6);
    if (preChar === ' ' || preChar === '' || preChar === '\n') {
      const sixChars = text.slice(-6);
      if (sixChars === 'return') return 'return';
      if (sixChars === 'typeof') return 'typeof';
      if (sixChars === 'import') return 'import';
      if (sixChars === 'export') return 'export';
    }
  }

  if (text.length >= 5) {
    const preChar = text.slice(-6, -5);
    if (preChar === ' ' || preChar === '' || preChar === '\n') { //
      const fiveChars = text.slice(-5);
      if (fiveChars === 'const') return 'const';
      if (fiveChars === 'while') return 'while';
      if (fiveChars === 'class') return 'class';
      if (fiveChars === 'async') return 'async';
      if (fiveChars === 'await') return 'await';
      if (fiveChars === 'catch') return 'catch';
      if (fiveChars === 'false') return 'false';
      if (fiveChars === 'break') return 'break';
    }
  }

  if (text.length >= 4) {
    const preChar = text.slice(-5, -4);
    if (preChar === ' ' || preChar === '' || preChar === '\n' || preChar === '.') {
      const fourChars = text.slice(-4);
      if (fourChars === 'else') return 'else';
      if (fourChars === 'this') return 'this';
      if (fourChars === 'null') return 'null';
      if (fourChars === 'true') return 'true';
    }
  }

  if (text.length >= 3) {
    const preChar = text.slice(-4, -3);
    if (preChar === ' ' || preChar === '' || preChar === '\n') {
      const threeChars = text.slice(-3);
      if (threeChars === 'let') return 'let';
      if (threeChars === 'var') return 'var';
      if (threeChars === 'try') return 'try';
      if (threeChars === 'new') return 'new';
      if (threeChars === 'for') return 'for';
    }
  }
  
  if (text.length >= 2) {
    const preChar = text.slice(-3, -2);
    if (preChar === ' ' || preChar === '' || preChar === '\n') {
      const twoChars = text.slice(-2);
      if (twoChars === 'if') return 'if';
      if (twoChars === 'in') return 'in';
    }
  }

  return '';
};

export default findReservedWord;