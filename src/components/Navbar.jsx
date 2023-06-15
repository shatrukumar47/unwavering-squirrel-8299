import React from "react";
import { HStack } from "@chakra-ui/react";
import logo from "./logo.png";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbar}>
      <img
        src={logo}
        alt="logo"
        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
      />
      <div style={{display: "flex" }}>
        <h1 style={{ color: "#E25B55", fontSize:"30px", fontWeight:"bolder"}}>
          PILL 
        </h1><h1 style={{ color: "white" }}>ALERT</h1>
      </div>
    </div>
  );
}

export default Navbar;
