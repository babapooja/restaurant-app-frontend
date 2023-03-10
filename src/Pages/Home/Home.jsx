import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Home.scss";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import CarouselText from "../../Components/CarouselText/CarouselText";
import Content from "../../Components/Content/Content";
import Feedback from "../../Components/Feedback/Feedback";

import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.jpg";
import FooterComponent from "../../Components/FooterComponent/Footer";
import { Fade } from "react-awesome-reveal";
const Home = () => {
  const images = [
    {
      imageSrc: IMG1,
      alt: "First slide",
    },
    {
      imageSrc: IMG2,
      alt: "Second slide",
    },
    {
      imageSrc: IMG3,
      alt: "Third slide",
    },
  ];
  return (
    <div className="max-h-screen">
      <NavBar currentPage={window.location.pathname} />
      <CarouselComponent images={images} />
      <CarouselText />
      <Fade>
        <Content />
      </Fade>
      <Feedback />
      <FooterComponent />
    </div>
  );
};

export default Home;
