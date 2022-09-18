import React from "react";
import Slider from "../components/assets/slider/Slider";
import Navbar from "../components/Navbar";
import Categories from "./Categories";
import CategoryItem from "./CategoryItem";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
