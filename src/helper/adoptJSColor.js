import findReservedWord from './findReservedWord';
import findMethodWord from './findMethodWord';
import isStructureChar from './isStructureChar';
import { Green, Purple, Emerald, Blue, Grey } from '../components/common/fontColor';

const adoptJSColor = text => {
  let texts = [];
  let tempText = '';
  let hasQuote = false;
  let hasDoubleQuote = false;
  let isComment = false;
  let hasComment = false;

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

    // 쌍따옴표 확인
    // close "
    if (hasDoubleQuote) {
      if (text[i] === '"') {
        texts.push(<Green key={i}>{tempText}</Green>);
        tempText = '';
        hasDoubleQuote = false;
      } 
      continue;
    } 

    // open "
    if (text[i] === '"') {
      texts.push(tempText.substring(0, tempText.length - 1));
      tempText = '"';
      hasDoubleQuote = true;
      continue;
    }

    // 주석 확인
    // close */
    if (hasComment) {
      if (text[i - 1] === '*' && text[i] === '/') {
        texts.push(<Grey key={i}>{tempText}</Grey>);
        tempText = '';
        hasComment = false;
      } 
      continue;
    } 

    // open /*
    if (text[i] === '/' && text[i + 1] === '*') {
      texts.push(tempText.substring(0, tempText.length - 1));
      tempText = '/';
      hasComment = true;
      continue;
    }

    // 주석 확인
    // close /
    if (isComment) {
      if (text[i] === '\n' || text[i + 1] === undefined) {
        texts.push(<Grey key={i}>{tempText}</Grey>);
        tempText = '';
        isComment = false;
      } 
      continue;
    }

    // open /
    if (text[i] === '/' && text[i + 1] === '/') {
      isComment = true;
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

export default adoptJSColor;