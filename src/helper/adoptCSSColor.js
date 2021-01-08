import findKeyWord from './findKeyWord';
import findQueryWord from './findQueryWord';
import { Green, Orange } from '../components/common/fontColor';

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

export default adoptCSSColor;