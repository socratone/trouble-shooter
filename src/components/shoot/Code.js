import React from 'react';
import findReservedWord from '../../helper/findReservedWord';
import findTagWord from '../../helper/findTagWord';
import findMethodWord from '../../helper/findMethodWord';
import findKeyWord from '../../helper/findKeyWord';
import findQueryWord from '../../helper/findQueryWord';
import isStructureChar from '../../helper/isStructureChar';
import isMarkupChar from '../../helper/isMarkupChar';
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

const Red = styled.span`
  color: rgb(252, 146, 158);
`;

const Orange = styled.span`
  color: rgb(250, 200, 99);
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

    if (isStructureChar(text[i])) {
      const normalText = tempText.slice(0, -1);
      texts.push(normalText);
      texts.push(<Emerald key={i}>{text[i]}</Emerald>)
      tempText = '';
      continue;
    }
  }

  if (tempText.length > 0) texts.push(tempText); // 마지막에

  return texts;
};

const adoptCSSColor = text => {
  let texts = [];
  let tempText = '';

  for (let i = 0; i < text.length; i++) {
    tempText += text[i];

    // :이 나오면 앞쪽 스트링 전부
    if (text[i + 1] === ':') {
      const keyWord = findKeyWord(tempText);

      if (keyWord.length > 0) {
        const normalText = tempText.slice(0, -keyWord.length);
        texts.push(normalText);
        texts.push(<Orange key={i}>{keyWord}</Orange>);
        tempText = '';
      }
      continue;
    }

    // {가 나오면 앞쪽 스트링 전부
    if (text[i + 1] === '{') {
      const queryWord = findQueryWord(tempText);
      if (queryWord.length > 0) {
        const normalText = tempText.slice(0, -queryWord.length);
        texts.push(normalText);
        texts.push(<Green key={i}>{queryWord}</Green>);
        tempText = '';
      }
      continue;
    }
  }

  if (tempText.length > 0) texts.push(tempText); // 마지막에

  return texts;
};

const adoptHTMLColor = text => {
  let texts = [];
  let tempText = '';
  let hasDoubleQuote = false;
  let isInTag = false;

  for (let i = 0; i < text.length; i++) {
    tempText += text[i];

    // 쌍따옴표 확인
    // close '
    if (hasDoubleQuote) {
      if (text[i] === '"') {
        texts.push(<Green key={i}>{tempText}</Green>);
        tempText = '';
        hasDoubleQuote = false;
      } 
      continue;
    } 

    // open '
    if (text[i] === '"') {
      texts.push(tempText.substring(0, tempText.length - 1));
      tempText = '"';
      hasDoubleQuote = true;
      continue;
    }

    if (text[i] === '<') isInTag = true;
    else if (text[i] === '>') isInTag = false;

    // <, /, >
    if (isMarkupChar(text[i])) { 
      const normalText = tempText.slice(0, -1);
      texts.push(normalText);
      texts.push(<Emerald key={i}>{text[i]}</Emerald>)
      tempText = '';
      continue;
    }
    
    // tag 기호 안에 있을 때만
    if (isInTag) {
      const tagWord = findTagWord({ 
        text: tempText, 
        nextChar: text[i + 1]
      });

      if (tagWord.length > 0) {
        const normalText = tempText.slice(0, -tagWord.length);
        texts.push(normalText);
        texts.push(<Red key={i}>{tagWord}</Red>);
        tempText = '';
        continue;
      }

      // 빈칸이 나오거나 =가 나오면 앞쪽 스트링 전부
      if (text[i + 1] === ' ' || text[i + 1] === '=') {
        const keyWord = findKeyWord(tempText);

        if (keyWord.length > 0) {
          const normalText = tempText.slice(0, -keyWord.length);
          texts.push(normalText);
          texts.push(<Purple key={i}>{keyWord}</Purple>);
          tempText = '';
        }
        continue;
      }
    }
  }

  if (tempText.length > 0) texts.push(tempText); // 마지막에

  return texts;
}

const Code = ({ type, children }) => {
  if (type === 'js') return <Pre>{adoptJSColor(children)}</Pre>;
  if (type === 'html') return <Pre>{adoptHTMLColor(children)}</Pre>;
  if (type === 'css') return <Pre>{adoptCSSColor(children)}</Pre>;
  return null;
}
 
export default Code;