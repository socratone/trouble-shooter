import findTagWord from './findTagWord';
import findKeyWord from './findKeyWord';
import isMarkupChar from './isMarkupChar';
import { Green, Emerald, Red, Purple } from '../components/common/fontColor';

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
};

export default adoptHTMLColor;