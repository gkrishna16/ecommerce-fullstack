import React from "react";
import Navbar from "../components/Navbar";

const Productitem = () => {
  return (
    <div>
      <Navbar />
      <div className="product-item-container">
        <div className="proditem-img-box">
          <img
            src="https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="&"
          />
        </div>
        <div className="proditem-text-box">
          <div>
            <h1>Product Name</h1>
          </div>
          <div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div className="flex-space">
            <div>Price</div>
            <div>
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
          </div>
          <div className="flex-space">
            <select name="type">
              <option disabled selected>
                Color
              </option>
              <option>Red</option>
              <option>Yellow</option>
              <option>Green</option>
              <option>Plum</option>
            </select>
            <div>
              <button>Add to cart.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productitem;
