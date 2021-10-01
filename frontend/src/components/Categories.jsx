import React from 'react';
import { Link } from 'react-router-dom';

const Categories = (props) => {
  return (
    <div className="btn-container">
    
       
       <Link to="/products">

       <button
            type="button"
            className="filter-btn"
            // our={() => filterItems(items.products)}
          >
            Products
          </button>
       </Link>
       
       <Link to="/services">

          <button
            type="button"
            className="filter-btn"
            // our={() => filterItems(items.products)}
          >
            Services
          </button>
       </Link>
    </div>
  );
};

export default Categories;
