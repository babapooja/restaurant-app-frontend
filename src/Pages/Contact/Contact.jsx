import React from "react";
import "./Contact.scss";
import NavBar from "../../Components/NavBar/NavBar";
import FooterComponent from "../../Components/FooterComponent/Footer";
import { MdLocalPhone, MdAttachEmail, MdLocationOn } from "react-icons/md";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { HiMail, HiUserCircle } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <NavBar currentPage={window.location.pathname} />
      <div className="pt-5 pb-14 flex flex-col justify-center items-center h-full">
        <h2 className="text-5xl font-semibold mt-5 mb-14">
          We would love to hear from you
        </h2>
        <div className="flex px-44 contact justify-between w-full">
          {/* phone number, email, etc */}
          <div className="flex flex-col w-2/5">
            {/* phone numbers */}
            <div>
              <div className="flex items-center mb-2">
                <MdLocalPhone size={30} />
                <p className="text-xl ml-2 underline font-medium">
                  Call us at:
                </p>
              </div>
              <span className="text-md">+1 (453) 849-2910</span>
              <br></br>
              <span className="text-md">+1 (674) 123-6789</span>
            </div>
            {/* emails */}
            <div className="mt-3">
              <div className="flex items-center mb-2">
                <MdAttachEmail size={30} />
                <p className="text-xl ml-2 underline font-medium">
                  Email us at:
                </p>
              </div>
              <a
                className="text-md underline"
                href="mailto:tikkawayinfo@protonmail.com"
              >
                tikkawayinfo@protonmail.com
              </a>
              <br></br>
              <a
                className="text-md underline"
                href="mailto:tikkawayfeedback@aol.com"
              >
                tikkawayfeedback@aol.com
              </a>
            </div>
            {/* map and address */}
            <div className="flex flex-col mt-3">
              <div className="flex items-center mb-2">
                <MdLocationOn size={30} />
                <p className="text-xl ml-2 underline font-medium">
                  Visit us at:
                </p>
              </div>
              <p>
                123 Main St Anytown,
                <br /> USA 12345
              </p>
              <span>
                Click{" "}
                <a
                  className="underline"
                  href="https://www.google.com/maps?q=123+Main+St+Anytown,+USA+12345&rlz=1C1UEAD_enUS988US988&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjMlbC9xM_9AhVwmWoFHfRmCbUQ_AUoAXoECAEQAw"
                >
                  here
                </a>{" "}
                to view location in map
              </span>
            </div>
          </div>

          {/* feedback form */}
          <form className="w-3/5 border h-fill border-gray-300 p-5 rounded-lg">
            {/* heading */}
            <div className="text-center mb-4">
              <h3 className="text-2xl font-medium">Contact Us</h3>
              <p className="text-gray-500 text-sm">
                Please fill the below form and let us know your experience with
                us!
              </p>
            </div>
            {/* name */}
            <div className="mb-3">
              <div className="mb-2">
                <Label htmlFor="name" value="Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                icon={HiUserCircle}
                placeholder="FirstName LastName"
                required={true}
              />
            </div>
            {/* email */}
            <div>
              <div className="mb-2">
                <Label htmlFor="email4" value="Email" />
              </div>

              <TextInput
                id="email4"
                type="email"
                icon={HiMail}
                placeholder="name@domain.com"
                required={true}
              />
            </div>
            {/* comment */}
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
              />
            </div>

            <div className="mt-5 flex items-center justify-center">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Contact;
