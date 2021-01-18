const categoryName = {
  all: '전체',
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  s3: 'AWS S3',
  ec2: 'AWS EC2',
  variable: '변수',
};

const convertCategoryName = category => categoryName[category];

export default convertCategoryName;