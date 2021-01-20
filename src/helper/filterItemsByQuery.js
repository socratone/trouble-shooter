const filterItemsByQuery = ({ items , query }) => {
  return items.filter(item => {
    if (item.title.toLowerCase().indexOf(query) >= 0) return true;
    // TODO: 본문 검색을 위해서는 새로운 api가 필요하다.
  });
};

export default filterItemsByQuery;