import React from "react";
import Imageslider from "./Imageslider";
import "./slider.css";
export const slides = [
  {
    url: "https://images.unsplash.com/photo-1663183536631-be6551377aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: `first-image`,
  },
  {
    url: "https://images.unsplash.com/photo-1663339198140-8b6087d53593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: `second-image`,
  },
  {
    url: "https://images.unsplash.com/photo-1663422894740-f4eb70a8e763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: `third-image`,
  },
];
const Slider = () => {
  return (
    <div>
      {/* <h1>Slider</h1> */}
      <div className="container-slider">
        <Imageslider slides={slides} />
      </div>
    </div>
  );
};

export default Slider;
