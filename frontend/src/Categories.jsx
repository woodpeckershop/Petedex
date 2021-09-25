import React from 'react';

const Categories = (props) => {
  // const {filterItems, items} = props
  const { setSelectedCategory}  = props;
  return (
    <div className="btn-container">
    
       
          <button
            type="button"
            className="filter-btn"
            // our={() => filterItems(items.products)}
            onClick={() => setSelectedCategory('products')}
          >
            Products
          </button>
          <button
            type="button"
            className="filter-btn"
            // onClick={() => filterItems(items.services)}
            onClick={() => setSelectedCategory('services')}
          >
            Services
          </button>
    
    </div>
  );
};

export default Categories;
