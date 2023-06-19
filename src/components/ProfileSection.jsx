import React, { useContext } from "react";
import style from "./ProfileSection.module.css";
import { EditIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import { AuthContext } from "./AuthContextProvier";
import { useNavigate } from "react-router-dom";

const ProfileSection = ({ id, firstname, lastname, email }) => {
  const { isAuth, Login, Logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Logout();
    // 
    localStorage.removeItem("userID");
    return navigate(`/`);
  };

  return (
    <div className={style.container}>
      <div className={style.profile}>
        <img
          src="https://img.freepik.com/free-icon/user_318-180888.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais"
          alt="profile-photo"
        />
        <h3
          style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "2px" }}
        >
          {firstname} {lastname}
        </h3>
        <p style={{ fontSize: "14px", color: "#DFE1E4" }}>
          <EmailIcon /> {email}{" "}
        </p>
      </div>

      <div className={style.profileTabs}>
        <div>
          <i class="fas fa-user-circle"></i>
          <p> My Profile</p>
        </div>
        <Divider />
        <div>
          <i class="fas fa-trophy"></i>
          <p> My Membership</p>
        </div>
        <Divider />
        <div>
          <PhoneIcon />
          <p> Contact Us</p>
        </div>
        <Divider />
        <div>
          <i class="far fa-user"></i>
          <p> Privacy Policy</p>
        </div>
        <Divider />
        <div>
          <i class="fas fa-file-alt"></i>
          <p> Terms And Conditions</p>
        </div>
        <Divider />
        <div>
          <i class="fas fa-sign-out-alt"></i>
          <p onClick={handleLogout}> Logout</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
