import React from 'react';

const applySpacesAndLineBreaksToText = text => {
  let texts = [];
  let line = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '\n') {
      texts.push(line);
      line = '';
      texts.push(<br key={i} />);
    } else if (text[i] === ' ') {
      line += '\u00A0';
    } else {
      line += text[i];
    }
  }
  if (line !== '') texts.push(line);
  return texts;
};

export default applySpacesAndLineBreaksToText;