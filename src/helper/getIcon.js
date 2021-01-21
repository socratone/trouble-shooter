const icon = {
  basic: 'https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/icon/js.png',
  algorithm: 'https://nigelalford.dev/content/images/2020/10/what-is-an-algorithm-featured12-30-2019_083310.png',
  html: 'https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/icon/html.png',
  css: 'https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/icon/css.png',
  js: 'https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/icon/js.png',
  dom: 'https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/icon/js.png',
  mysql: 'https://www.percona.com/blog/wp-content/uploads/2008/02/Finding-the-largest-tables-on-MySQL.jpg',
  sqlite: 'https://i.morioh.com/e1e505ba29.png',
  mongodb: 'https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=775',
  nodejs: 'https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/icon/nodejs.png',
  webpack: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Webpack.svg/1200px-Webpack.svg.png',
  babel: 'https://raw.githubusercontent.com/babel/logo/master/babel.png',
  jest: 'https://mulder21c.github.io//jest/img/opengraph.png',
  electron: 'https://res.cloudinary.com/practicaldev/image/fetch/s--6UEM9XZf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/s3uitx6rdv7sod1g2acz.png',
  aws: 'https://trouble-shooter.s3.ap-northeast-2.amazonaws.com/icon/aws.png',
};

const getIcon = stack => icon[stack];

export default getIcon;