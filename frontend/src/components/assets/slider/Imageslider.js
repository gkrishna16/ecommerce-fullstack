import React, { useState } from "react";
import "./slider.css";

const Imageslider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(slides[currentIndex].url);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="image-container">
      <div className="left-arrow" onClick={goToPrevious}>
        L
      </div>
      <div className="right-arrow" onClick={goToNext}>
        R
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="slider-image"
      ></div>
    </div>
  );
};

export default Imageslider;
