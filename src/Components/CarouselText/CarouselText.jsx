import React from "react";
import "./CarouselText.scss";
const CarouselText = () => {
  return (
    <div className="carousel__text  text-white absolute top-1/3 left-1/3">
      <h2 className="font-bold text-7xl relative">Good Food, Good Mood!</h2>
      <h4 className="text-5xl relative">
        Witness the taste of all cuisines here at{" "}
        <span className="title text-7xl">Tikkaway</span>!
      </h4>
    </div>
  );
};

export default CarouselText;
