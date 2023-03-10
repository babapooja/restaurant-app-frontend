import React from "react";
import "./NavBar.scss";
import { Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();
  const links = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/menu",
      label: "Order Menu",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/contact-us",
      label: "Contact Us",
    },
    
  ];
  const linksDOM = (key, path, label) => {
    return (
      <div key={key}>
        <Navbar.Link
          href={path}
          active={props.currentPage}
          className={
            "link text-white text-xl cursor-pointer" +
            (props.currentPage === path ? " font-semibold" : " font-light")
          }
        >
          {label}
        </Navbar.Link>
      </div>
    );
  };

  return (
    <Navbar className="navbar">
      <h2 className="text-white text-5xl title cursor-pointer font-bold tracking-wide" onClick={() => navigate("/")}>
        Tikkaway
      </h2>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {links.map(({ key, path, label }) => {
          return linksDOM(key, path, label);
        })}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
