const thumbnail = {
  html: 'https://techbeacon.com/sites/default/files/styles/social/public/html5-mobile-app-native-hybrid-pros-cons.jpg?itok=R3pMKIzh',
  js: 'https://media.vlpt.us/images/azurestefan/post/683ee66b-2287-4ceb-837d-e2c9226252be/JavaScript.png',
  css: 'https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg',
  nodejs: 'https://logz.io/wp-content/uploads/2020/09/Node.JS-and-Observability-1-1024x536.png',
  aws: 'https://miro.medium.com/max/4000/1*b_al7C5p26tbZG4sy-CWqw.png',
  basic: 'https://www.freecodecamp.org/news/content/images/2020/03/cover-1.png',
};

const getThumbnail = stack => thumbnail[stack];

export default getThumbnail;