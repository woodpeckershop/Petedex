import React from "react";
import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import "./Categories.scss";

const Categories = (props) => {
  return (
    <div className="btn-container" style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
      <Link to="/products">
        <button className='category-button'>Products</button>
        {/* <Button variant="contained" classname='category-button'style={{borderRadius: '154px', fontFamily:'Baloo 2', maxWidth: '300px', maxHeight: '300px', minWidth: '300px', minHeight: '300px', margin: '30px',  marginTop: '600px',backgroundColor:' #cd9042', fontSize: '50px', padding: '100px'}}>Products</Button> */}
      </Link>

      <Link to="/services">
      <button className='category-button'>Services</button>
        {/* <Button variant="contained"  classname='category-button' style={{borderRadius: '154px', fontFamily:'Baloo 2', maxWidth: '300px', maxHeight: '300px', minWidth: '300px', minHeight: '300px', margin: '30px', backgroundColor:' #cd9042', marginTop: '600px',fontSize: '50px'}}>Services</Button> */}
      </Link>

      
    </div>
  );
};

export default Categories;
