import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Check from "./pages/Check";
import Download from "./pages/Download";
import Myaccount from "./pages/Myaccount";
import Review from "./pages/Review";
import Start from "./pages/Start";
import View from "./pages/View";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "START NEW APPLICATION",
      icon: "./assets/icons/start.png",
    },
    {
      path: "/dashboard/review",
      name: "REVIEW APPLICATION",
      icon: "./assets/icons/review.png",
    },
    {
      path: "/dashboard/myaccount",
      name: "MY ACCOUNT",
      icon: "./assets/icons/myaccount.png",
    },
    {
      path: "/dashboard/check",
      name: "CHECK GST OF COMPLIANCE",
      icon: "./assets/icons/checkgst.png",
    },

    {
      path: "/dashboard/add",
      name: "ADD USERS",
      icon: "./assets/icons/adduser.png",
    },
    {
      path: "/dashboard/download",
      name: "DOWNLOAD FORM",
      icon: "./assets/icons/download.png",
    },
    {
      path: "/dashboard/view",
      name: "VIEW REPORTS",
      icon: "./assets/icons/viewreports.png",
    },
  ];
  return (
    <div className="container" style={{ background: "#fff" }}>
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Hello,
          </h1>
          <div
            style={{ marginLeft: isOpen ? "-95px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <img
              className="icon"
              src={require(`${item.icon}`)}
              width={25}
              height={25}
              alt="img"
            />
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/add" element={<Add />} />
        <Route path="/review" element={<Review />} />
        <Route path="/check" element={<Check />} />
        <Route path="/download" element={<Download />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
};

export default Sidebar;
