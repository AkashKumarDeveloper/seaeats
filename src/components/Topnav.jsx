import React, { useState } from "react";
import "./Topnav.css";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import {TbTruckReturn} from 'react-icons/tb'
import {FaUserFriends, FaGoogleWallet} from "react-icons/fa";
import {MdHelp, MdOutlineFavorite} from "react-icons/md"


const Topnav = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log("sideNav>>>", sideNav);
  return (
    <div className="top-nav">
      <div className="navstart">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="heading">
          Sea
          <span style={{color: "green"}}>Eats</span>
        </h1>
        <div className="element">
          <p className="element-content">Free</p>
          <p className="element-content2">Delivery</p>
        </div>
      </div>
      <div className="center-content">
        <AiOutlineSearch size={25} />
        <input
          className="input-element"
          type="text"
          placeholder="Search Meals..."
        />
      </div>
      <button className="button">
        <BsFillCartFill size={20} />
        Cart
      </button>
      {sideNav ? <div className="bg-overlay" onClick={() => setSideNav(!sideNav)}></div> : ""}

      <div className={sideNav ? "sidebar" : "sidebarFalse"}>
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="close-button"
        />
        <h2 className="custom-text">
          Sea <span className="custom-bold-orange">Eats</span>
        </h2>
        <nav>
          <ul className="custom-container ">
            <li className="custom-element-sidebar">
              <BsPerson size={25} className="custom-element-sidebar" />
              My Account
            </li>
            <li className="custom-element-sidebar">
              <TbTruckReturn size={25} className="custom-element-sidebar" />
              Delivery
            </li>
            <li className="custom-element-sidebar">
              <MdOutlineFavorite size={25} className="custom-element-sidebar" />
              My Favorite
            </li>
            <li className="custom-element-sidebar">
              <FaGoogleWallet size={25} className="custom-element-sidebar" />
              My wallet
            </li>
            <li className="custom-element-sidebar">
              <MdHelp size={25} className="custom-element-sidebar" />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Topnav;
