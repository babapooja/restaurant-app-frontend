import React from "react";
import { Accordion } from "flowbite-react";

const MeetTheTeam = (props) => {
  const displayContent = (key, i) => {
    return (
      <Accordion.Panel>
        <Accordion.Title className="capitalize title text-3xl font-semibold bg-gray-100">
          {key}
        </Accordion.Title>
        <Accordion.Content className="bg-white">
          <div className="flex w-full justify-around flex-wrap">
            {props.team[key].map(({ name, post, photo }) => {
              return (
                <div className="flex flex-col items-center">
                  <img
                    src={photo}
                    alt={name}
                    className="rounded-full h-52 w-52 object-cover mb-3"
                  />
                  <h3 className="text-2xl font-medium">{name}</h3>
                  <h4 className="italic text-gray-500">{post}</h4>
                </div>
              );
            })}
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    );
  };
  return (
    <div
      className="px-44  py-16 flex flex-col items-center max-h-full min-h-screen"
      style={{
        backgroundImage: `url(
            "https://images.unsplash.com/photo-1593821915210-e0bac68f370e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          )`,
        backgroundPosition: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <h2 className="text-5xl font-semibold mb-8 text-white">Meet our Team</h2>
      <div className="team flex flex-col flex-wrap justify-between w-full">
        <Accordion alwaysOpen={true} collapseAll={true}>
          {Object.keys(props.team).map((key, i) => {
            return displayContent(key, i);
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default MeetTheTeam;
