import React, { useContext } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import logo from "./logo.png";
import style from "./Navbar.module.css";
import Login from "../Pages/Login";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContextProvier";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const {isAuth} = useContext(AuthContext);

  return (
    <div className={style.navbar}>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "60px" }}
      >
        <img src={logo} alt="logo" className={style.logo} onClick={()=> navigate(`/`)} />
        <div className={style.logoContainer}>
          <h1
            style={{ color: "#E25B55", fontSize: "30px", fontWeight: "bolder" }}
          >
            {" "}
            PILL{" "}
          </h1>
          <h1 style={{ color: "blue" }}>ALERT</h1>
        </div>
      </div>
      {
        isAuth? "" : <div style={{ marginRight: "50px" }}>
            <Button
              variant="outline"
              style={{ color: "white" }}
              _hover={{ bg: "#7C98F4" }}
              onClick={onOpen}
            >
              Log In{" "}
              <i class="fas fa-sign-in-alt" style={{ marginLeft: "10px" }}></i>
            </Button>
          
          <Login isOpen={isOpen} onClose={onClose} />
        </div>
      }
     
    </div>
  );
}

export default Navbar;
