import React from "react";
import "./CarouselComponenet.scss";
import { Carousel } from "flowbite-react";

const CarouselComponent = (props) => {
  return (
    <div className="carousel relative">
      <Carousel indicators={false} leftControl=" " rightControl=" ">
        {props.images.map(({ imageSrc, alt }) => {
          return <img src={imageSrc} alt={alt} />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
