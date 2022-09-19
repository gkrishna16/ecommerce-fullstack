import React from "react";
import Navbar from "../components/Navbar";
import Products from "./Products";

const Productslist = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            padding: `10px`,
          }}
        >
          <div>
            <span>Filter Products</span>
            <select name="type">
              <option disabled selected>
                Color
              </option>
              <option>Red</option>
              <option>Yellow</option>
              <option>Green</option>
              <option>Plum</option>
            </select>{" "}
            <select name="type">
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>XL</option>
              <option>L</option>
            </select>
          </div>
          <div>
            <span>Sort Products</span>
            <select>
              <option disabled selected>
                Clothing
              </option>
              <option>Shirt</option>
              <option>Trouser</option>
              <option>Jeans</option>
            </select>
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Productslist;
