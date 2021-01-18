const thumbnail = {
  basic: 'https://www.freecodecamp.org/news/content/images/2020/03/cover-1.png',
  algorithm: 'https://nigelalford.dev/content/images/2020/10/what-is-an-algorithm-featured12-30-2019_083310.png',
  html: 'https://techbeacon.com/sites/default/files/styles/social/public/html5-mobile-app-native-hybrid-pros-cons.jpg?itok=R3pMKIzh',
  css: 'https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg',
  js: 'https://media.vlpt.us/images/azurestefan/post/683ee66b-2287-4ceb-837d-e2c9226252be/JavaScript.png',
  mysql: 'https://www.percona.com/blog/wp-content/uploads/2008/02/Finding-the-largest-tables-on-MySQL.jpg',
  sqlite: 'https://i.morioh.com/e1e505ba29.png',
  mongodb: 'https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775',
  nodejs: 'https://logz.io/wp-content/uploads/2020/09/Node.JS-and-Observability-1-1024x536.png',
  webpack: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Webpack.svg/1200px-Webpack.svg.png',
  babel: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
  jest: 'https://mulder21c.github.io//jest/img/opengraph.png',
  electron: 'https://res.cloudinary.com/practicaldev/image/fetch/s--6UEM9XZf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s3uitx6rdv7sod1g2acz.png',
  aws: 'https://miro.medium.com/max/4000/1*b_al7C5p26tbZG4sy-CWqw.png',
};

const getThumbnail = stack => thumbnail[stack];

export default getThumbnail;