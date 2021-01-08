const getStackThumbnail = stack => {
  if (stack === 'html') return 'https://techbeacon.com/sites/default/files/styles/social/public/html5-mobile-app-native-hybrid-pros-cons.jpg?itok=R3pMKIzh';
  if (stack === 'js') return 'https://media.vlpt.us/images/azurestefan/post/683ee66b-2287-4ceb-837d-e2c9226252be/JavaScript.png';
  if (stack === 'css') return 'https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg';
  if (stack === 'nodejs') return 'https://logz.io/wp-content/uploads/2020/09/Node.JS-and-Observability-1-1024x536.png';
  if (stack === 's3') return 'https://4matt.com.br/wp-content/uploads/2020/04/Amazon-S3.jpg';
  if (stack === 'ec2') return 'https://miro.medium.com/max/750/1*q6F0j8HFHd8jeYXyQBqrCQ.jpeg';
};

export default getStackThumbnail;