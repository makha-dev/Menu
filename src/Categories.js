import React from 'react';

const Categories = ({displayItems, categories}) => {
  return (
    
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
        <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => displayItems(category)}
          >
            {category}
        </button>
        );
      })}
    </div>
  );
};

export default Categories;
