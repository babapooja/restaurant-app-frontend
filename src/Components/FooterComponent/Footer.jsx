import React from "react";
import { Footer } from "flowbite-react";

const FooterComponent = () => {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="https://cdn.pixabay.com/photo/2021/05/25/02/03/restaurant-6281067_1280.png"
            alt="Restaurant Logo"
            name="Tikkaway"
            className="title"
          />
          <Footer.LinkGroup>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="/contact-us">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Tikkaway" year={2022} />
      </div>
    </Footer>
  );
};

export default FooterComponent;
