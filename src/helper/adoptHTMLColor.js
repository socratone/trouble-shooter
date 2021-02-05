import findKeyWord from './findKeyWord';
import isMarkupChar from './isMarkupChar';
import { Green, Emerald, Red, Purple } from '../components/common/fontColor';

const adoptHTMLColor = text => {
  let texts = [];
  let tempText = '';
  let hasDoubleQuote = false;
  let isInTag = false;
  let isFirstWord = false;

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

    if (text[i] === '<') {
      isInTag = true;
      isFirstWord = false; // 초기화
    } else if (text[i] === '>') {
      isInTag = false;
    }

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
      // 아직 첫 번째 단어를 처리하지 못했을 때
      if (!isFirstWord) {
        // 다음 글자에 빈칸이 나오거나 끝나면 앞쪽 스트링 전부
        if (text[i + 1] === ' ' || text[i + 1] === '>' || text[i + 1] === '/') {
          texts.push(<Red key={i}>{tempText}</Red>);
          tempText = '';
          isFirstWord = true;
          continue;
        }
      } else {
        // 다음 글자에 빈칸이 나오거나 =가 나오면 앞쪽 스트링 전부
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
  }

  if (tempText.length > 0) texts.push(tempText); // 마지막에

  return texts;
};

export default adoptHTMLColor;