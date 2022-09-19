import React from "react";
import Circle from "../components/assets/slider/Circle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/SearchOutlined";
import "../styles/Products.css";

const Product = ({ item }) => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${item.img})` }} className="info">
        <div className="icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="icon">
          <SearchOutlinedIcon />
        </div>
        <div className="icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
