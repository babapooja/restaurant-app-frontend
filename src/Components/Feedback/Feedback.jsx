import React from "react";
import "./Feedback.scss";
import { Carousel } from "flowbite-react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Rating } from "flowbite-react";

const Feedback = () => {
  const feedback = [
    {
      name: "John Doe",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      comment:
        "The restaurant has a cozy and welcoming atmosphere with comfortable seating arrangements and stylish decor. The lighting is just right and the music is not too loud, creating a pleasant dining experience.",
      rating: "4/5",
    },
    {
      name: "Maria Jane",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      comment:
        "The food is absolutely delicious! Every dish is made with fresh and high-quality ingredients, and the presentation is beautiful. The menu has a great variety of options, catering to different tastes and dietary restrictions.",
      rating: "5/5",
    },
    {
      name: "Hannah",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      comment:
        " The staff is friendly, attentive, and knowledgeable about the menu. They go above and beyond to make sure that every guest is satisfied with their dining experience. The service is prompt but not rushed, allowing guests to enjoy their meal at their own pace. Overall, the hospitality is exceptional.",
      rating: "5/5",
    },
  ];
  const displayRating = (rating) => {
    var arr = Array(parseInt(rating)).fill(1);
    if (arr.length < 5) {
      while (arr.length !== 5) {
        arr.push(0);
      }
    }
    return arr.map((x) => {
      return <Rating.Star  filled={x === 1} />;
    });
  };

  const Card = (item, index) => {
    return (
      <div
        key={index}
        className=" h-auto w-3/6 rounded-md flex p-8 items-center cardCarousel"
      >
        <div className="flex items-center">
          <div className="user__details w-3/4">
            <img
              src={item.photo}
              className="h-20 w-20 rounded-full mb-3 object-cover"
              alt=""
            />
            <p className="text-lg font-semibold">{item.name}</p>
          </div>

          <div className="text-lg text-gray-400 italic text-justify">
            <span className="flex justify-start italic">
              <ImQuotesLeft size={20} />
            </span>
            <p className="ml-8">{item.comment}</p>
            <span className="flex justify-end italic">
              <ImQuotesRight size={20} />
            </span>

            {item.rating !== "" ? (
              <div className="ratings flex text-sm">
                <Rating>
                  {displayRating(item.rating.split("/")[0])} &nbsp;{" "}
                </Rating>
                {item.rating}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="feedback h-screen w-full p-14 flex flex-col items-center">
      <h2 className="text-5xl text-white mb-20 mt-14">
        What our customers say about us...
      </h2>
      <div className="h-3/4 w-4/5 carouselHolder">
        <Carousel leftControl=" " rightControl=" " indicators={false}>
          {feedback.map((item, index) => {
            return Card(item, index);
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;
