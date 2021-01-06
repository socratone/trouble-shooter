const findTagWord = ({ text, nextChar }) => {
  if (nextChar !== '>' && nextChar !== ' ' && nextChar !== '\n') return '';

  if (text.length >= 8) {
    const preChar = text.slice(-7, -8);
    if (preChar === '<' || preChar === '/') {
      const sevenChars = text.slice(-8);
      if (sevenChars === 'textarea') return 'textarea';
      if (sevenChars === 'progress') return 'progress';
    }
  }

  if (text.length >= 7) {
    const preChar = text.slice(-6, -7);
    if (preChar === '<' || preChar === '/') {
      const sevenChars = text.slice(-7);
      if (sevenChars === 'article') return 'article';
      if (sevenChars === 'section') return 'section';
      if (sevenChars === 'address') return 'address';
    }
  }

  if (text.length >= 6) {
    const preChar = text.slice(-7, -6);
    if (preChar === ' ' || preChar === '') {
      const sixChars = text.slice(-6);
      if (sixChars === 'button') return 'button';
      if (sixChars === 'iframe') return 'iframe';
      if (sixChars === 'script') return 'script';
      if (sixChars === 'header') return 'header';
      if (sixChars === 'footer') return 'footer';
      if (sixChars === 'select') return 'select';
      if (sixChars === 'option') return 'option';
      if (sixChars === 'strong') return 'strong';
      if (sixChars === 'canvas') return 'canvas';
    }
  }

  if (text.length >= 5) {
    const preChar = text.slice(-6, -5);
    if (preChar === ' ' || preChar === '') {
      const fiveChars = text.slice(-5);
      if (fiveChars === 'input') return 'input';
      if (fiveChars === 'title') return 'title';
      if (fiveChars === 'aside') return 'aside';
      if (fiveChars === 'video') return 'video';
      if (fiveChars === 'audio') return 'audio';
      if (fiveChars === 'embed') return 'embed';
      if (fiveChars === 'lable') return 'lable';
    }
  }

  if (text.length >= 4) {
    const preChar = text.slice(-5, -4);
    if (preChar === ' ' || preChar === '') {
      const fourChars = text.slice(-4);
      if (fourChars === 'html') return 'html';
      if (fourChars === 'head') return 'head';
      if (fourChars === 'link') return 'link';
      if (fourChars === 'meta') return 'meta';
      if (fourChars === 'body') return 'body';
      if (fourChars === 'span') return 'span';
      if (fourChars === 'form') return 'form';
      if (fourChars === 'main') return 'main';
      if (fourChars === 'code') return 'code';
    }
  }

  if (text.length >= 3) {
    const preChar = text.slice(-4, -3);
    if (preChar === ' ' || preChar === '') {
      const threeChars = text.slice(-3);
      if (threeChars === 'div') return 'div';
      if (threeChars === 'img') return 'img';
      if (threeChars === 'nav') return 'nav';
      if (threeChars === 'pre') return 'pre';
    }
  }
  
  if (text.length >= 2) {
    const preChar = text.slice(-3, -2);
    if (preChar === ' ' || preChar === '') {
      const twoChars = text.slice(-2);
      if (twoChars === 'br') return 'br';
      if (twoChars === 'ul') return 'ul';
      if (twoChars === 'ol') return 'ol';
      if (twoChars === 'li') return 'li';
      if (twoChars === 'h1') return 'h1';
      if (twoChars === 'h2') return 'h2';
      if (twoChars === 'h3') return 'h3';
      if (twoChars === 'h4') return 'h4';
      if (twoChars === 'h5') return 'h5';
      if (twoChars === 'h6') return 'h6';
      if (twoChars === 'hr') return 'hr';
    }
  }

  if (text.length === 1) {
    const preChar = text.slice(-2, -1);
    if (preChar === ' ' || preChar === '') {
      const char = text.slice(-1);
      if (char === 'p') return 'p';
      if (char === 'a') return 'a';
    }
  }

  return '';
};

export default findTagWord;