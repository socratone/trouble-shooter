const categoryName = {
  all: '전체',
  css: 'CSS',
  js: 'JavaScript',
  aws: 'AWS',
  basic: '기본',
};

const convertCategoryName = category => categoryName[category];

export default convertCategoryName;