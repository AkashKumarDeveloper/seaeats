import React, { useState } from "react";
import seafood1 from "../assets/Images/adobestock_alexander_raths_191656978.jpeg";
import seafood2 from "../assets/Images/douglas-lopez-4B0cLMtJxWw-unsplash.jpg";
import seafood3 from "../assets/Images/images.jpg";
import "./Featured.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [{ url: seafood1 }, { url: seafood2 }, { url: seafood3 }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="element1 group">
      <div
        className="element2"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className="custom-element">
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className="custom-element2">
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className="flex-center ">
        {sliders.map((sliderItems, slideIndex) => (
          <div
            className="text-large-pointer"
            key={slideIndex}
            onClick={() => moveToNextSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
