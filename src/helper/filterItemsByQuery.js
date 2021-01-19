const filterItemsByQuery = ({ items , query }) => {
  return items.filter(item => {
    if (item.title.toLowerCase().indexOf(query) >= 0) return true;
    // TODO: 본문 검색
  });
};

export default filterItemsByQuery;