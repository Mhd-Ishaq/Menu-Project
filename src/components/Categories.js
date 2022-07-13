import React from 'react';

const Categories = ({ filterMenuItems, menuItems }) => {
  let categories = menuItems.map((item) => item.category);
  categories = ['all', ...new Set(categories)];
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => filterMenuItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
