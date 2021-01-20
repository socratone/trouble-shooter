import findKeyWord from './findKeyWord';
import findQueryWord from './findQueryWord';
import { Green, Orange, Grey } from '../components/common/fontColor';

const adoptCSSColor = text => {
  let texts = [];
  let tempText = '';
  let hasComment = false;
  let isInBracket = false;

  for (let i = 0; i < text.length; i++) {
    tempText += text[i];

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

    if (text[i] === '{') isInBracket = true;
    else if (text[i] === '}') isInBracket = false;

    // {} 안에 있을 때만
    if (isInBracket) {
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

export default adoptCSSColor;