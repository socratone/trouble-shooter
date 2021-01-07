const convertCategoryName = category => {
  if (category === 'all') return '전체';
  if (category === 'css') return 'CSS';
  if (category === 'js') return 'JavaScript';
  if (category === 's3') return 'S3';
}

export default convertCategoryName;