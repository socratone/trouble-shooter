import React from 'react';
import findReservedWord from '../../helper/findReservedWord';
import findMethodWord from '../../helper/findMethodWord';
import validateOperator from '../../helper/validateOperator';
import styled from 'styled-components';

const Pre = styled.pre`
  padding: 16px 20px;
  background-color: #282c34; 
  color: white;
  border-radius: 10px;
  margin: 10px 0;
  overflow: auto;
  font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 14px;
  line-height: 20px;
`;

const Purple = styled.span`
  color: rgb(197, 165, 197);
`;

const Blue = styled.span`
  color: rgb(121, 182, 242);
`;

const Emerald = styled.span`
  color: rgb(136, 198, 190);
`;

const Green = styled.span`
  color: rgb(141, 200, 145);
`;

const adoptJSColor = text => {
  let texts = [];
  let tempText = '';
  let hasQuote = false;

  for (let i = 0; i < text.length; i++) {
    tempText += text[i];

    // 따옴표 확인
    // close '
    if (hasQuote) {
      if (text[i] === '\'') {
        texts.push(<Green key={i}>{tempText}</Green>);
        tempText = '';
        hasQuote = false;
      } 
      continue;
    } 

    // open '
    if (text[i] === '\'') {
      texts.push(tempText.substring(0, tempText.length - 1));
      tempText = '\'';
      hasQuote = true;
      continue;
    }

    // 예약어 확인
    const reservedWord = findReservedWord({
      text: tempText, 
      nextChar: text[i + 1]
    });

    if (reservedWord.length > 0) {
      const normalText = tempText.slice(0, -reservedWord.length);
      texts.push(normalText);
      texts.push(<Purple key={i}>{reservedWord}</Purple>);
      tempText = '';
      continue;
    }

    // 메소드 확인
    // 뒤에 (가 나와야 한다.
    if (text[i + 1] === '(') {
      // 앞에 공백이나 .이 나오기 전까지 문자가 나와야 한다.
      const methodWord = findMethodWord(tempText);

      if (methodWord.length > 0) {
        const normalText = tempText.slice(0, -methodWord.length);
        texts.push(normalText);
        texts.push(<Blue key={i}>{methodWord}</Blue>);
        tempText = '';
        continue;
      }
    }

    if (validateOperator(text[i])) {
      const normalText = tempText.slice(0, -1);
      texts.push(normalText);
      texts.push(<Emerald key={i}>{text[i]}</Emerald>)
      tempText = '';
      continue;
    }
  }

  if (tempText.length > 0) texts.push(tempText); // 마지막에

  return texts;
}

const Code = ({ type, children }) => {
  if (type === 'js') return <Pre>{adoptJSColor(children)}</Pre>;
  if (type === 'html') return <Pre>{adoptJSColor(children)}</Pre>;
  if (type === 'css') return <Pre>{adoptJSColor(children)}</Pre>;
  return null;
}
 
export default Code;