import React from "react";
import CategoryItem from "./CategoryItem";
import { slides } from "../components/assets/slider/Slider";
import "../styles/category.css";

const Categories = () => {
  console.log(slides);
  return (
    <div>
      <div>Categories</div>
      <div className="category-item">
        {slides.map((im, index) => {
          return (
            <div>
              <CategoryItem im={im} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
