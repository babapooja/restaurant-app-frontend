import React from "react";
import "./Content.scss";
import { Card } from "flowbite-react";
import INDIAN from "../../assets/Cuisines/indian.jpg";
import ITALIAN from "../../assets/Cuisines/italian.jpg";
import FRENCH from "../../assets/Cuisines/french.jpg";
import JAPNEESE from "../../assets/Cuisines/japneese.jpg";
import CHINEESE from "../../assets/Cuisines/chineese.jpg";

const Content = () => {
  const whatWeProvide = [
    {
      title: "Indian ",
      src: INDIAN,
      imgAlt: "Indian cuisine",
      description:
        "Dishes ranging from North of Indian to South of Indian and from East of India to West of India are served by us.",
    },
    {
      title: "Italian",
      src: ITALIAN,
      imgAlt: "Italian cuisine",
      description:
        "Our chefs cook various Italian dishes. Cheese, cold cuts and wine are also available to enjoy the cuisine",
    },
    {
      title: "French",
      src: FRENCH,
      imgAlt: "French cuisine",
      description:
        "Croissant, bagguette, onion soup, etc. french delicacies are served at our place and are a must try items.",
    },
    {
      title: "Japneese",
      src: JAPNEESE,
      imgAlt: "Japneese cuisine",
      description:
        "The traditional cuisine of Japan is based on rice with miso soup and other dishes; also served by us.",
    },
    {
      title: "Chineese",
      src: CHINEESE,
      imgAlt: "Chineese cuisine",
      description:
        "Chineese food is not only tasty but also a work of art for people to appreciate. Our chefs master in this cuisine as well.",
    },
  ];
  const card = (index, title, src, imgAlt, description) => {
    return (
      <div className="max-w-sm" key={index}>
        <Card className="imageCard h-auto max-w-sm" imgAlt={imgAlt} imgSrc={src}>
          <h5 className="text-2xl font-bold tracking-tight dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700">{description}</p>
        </Card>
      </div>
    );
  };

  return (
    <div className="content h-full">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="title text-5xl mb-10 font-semibold">What we serve</h2>
        <div className="w-auto grid grid-cols-3 gap-8">
          {whatWeProvide.map(({ index, title, src, imgAlt, description }) => {
            return card(index, title, src, imgAlt, description);
          })}
          <div className="flex h-full justify-center items-center">
            <h3 className="text-xl text-start">and many more...</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
