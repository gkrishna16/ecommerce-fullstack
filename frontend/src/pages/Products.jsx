import React from "react";
import Navbar from "../components/Navbar";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>PRODUCTS</div>
      <div className="main-products-container">
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
