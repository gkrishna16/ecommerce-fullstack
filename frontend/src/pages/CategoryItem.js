import React from "react";
import "../styles/category.css";

const CategoryItem = ({ im }) => {
  return (
    <div className="category-item-container">
      <div
        style={{ backgroundImage: `url(${im.url})` }}
        className="cat-img-div"
      >
        <div
          style={{
            color: `white`,
                      display: `flex`,
            
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <button>SHOP NOW !</button>
          <p>This season all for you.</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
