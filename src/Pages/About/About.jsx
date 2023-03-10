import React from "react";
import AboutUsContent from "../../Components/AboutUsContent/AboutUsContent";
import MeetTheTeam from "../../Components/AboutUsContent/MeetTheTeam";
import NavBar from "../../Components/NavBar/NavBar";
import FooterComponent from "../../Components/FooterComponent/Footer";
const About = () => {
  const team = {
    chefs: [
      {
        name: "Marco Pierre White",
        post: "Gordon Ramsy",
        photo:
          "https://people.com/thmb/PniYSht2kxcqvOOk_LchSgd-7kY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(689x119:691x121)/gordon-ramsey-interview-110822-3-6679124f27b54dff80a1eeb5ce521d47.jpg",
      },
      {
        name: "Ashwin Sarthak",
        post: "Head Chef",
        photo:
          "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        name: "John Doe",
        post: "Assistant Chef",
        photo:
          "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        name: "Mark Wilson",
        post: "Jr. Chef",
        photo:
          "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80",
      },
    ],
    managingTeam: [
      {
        name: "Angela Hartnett",
        post: "Manager",
        photo:
          "https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        name: "Ana Ros",
        post: "Receptionist",
        photo:
          "https://media.istockphoto.com/id/1330553286/photo/friendly-receptionist-working-in-office.jpg?b=1&s=170667a&w=0&k=20&c=opdxx7IPMmKsnBf8TLfHbAURatFoAwFnUEDb9npm0pg=",
      },
    ],
  };

  return (
    <>
      <NavBar currentPage={window.location.pathname} />
      <div className="px-44  py-16 flex flex-col justify-center items-center h-full">
        <AboutUsContent />
      </div>
      <MeetTheTeam team={team} />
      <FooterComponent />
    </>
  );
};

export default About;
