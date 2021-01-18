const filterItemsByCategory = ({ items, category }) => {
  return items.filter(item => {
    if (category === 'all') return true;
    if (item.category === category) return true;
  });
};

export default filterItemsByCategory;