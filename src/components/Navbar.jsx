import React from "react";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div style={{ display: "flex", alignItems: "center", marginLeft:"60px" }}>
        <img src={logo} alt="logo" className={style.logo} />
        <div className={style.logoContainer}>
          <h1 style={{ color: "#E25B55", fontSize: "30px", fontWeight: "bolder" }} > PILL </h1>
          <h1 style={{ color: "blue" }}>ALERT</h1>
        </div>
      </div>
      <div style={{marginRight:"50px"}}>
        <Button
          variant="outline"
          style={{ color: "white", marginRight: "20px" }}
          _hover={{ bg: "black" }}
        >
          Play Store{" "}
          <img
            src="https://healthifyme.imgix.net/static/images/home_website/landing/icons/playstore_ic.svg"
            alt=""
            style={{ marginLeft: "10px" }}
          />
        </Button>
        <Button
          variant="outline"
          style={{ color: "white" }}
          _hover={{ bg: "black" }}
        >
          Apple Store{" "}
          <FontAwesomeIcon
            icon={faMobileScreenButton}
            style={{ marginLeft: "10px" }}
          />
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
