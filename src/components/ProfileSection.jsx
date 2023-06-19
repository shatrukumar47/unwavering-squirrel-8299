import React, { useContext, useEffect, useState } from "react";
import style from "./ProfileSection.module.css";
import { EditIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { AuthContext } from "./AuthContextProvier";
import { useNavigate } from "react-router-dom";
import { FaAddressBook, FaCalendarAlt, FaFileAlt, FaHeartbeat, FaUserShield, FaUserTie } from "react-icons/fa";

const ProfileSection = ({ userData, handleProfileTabs }) => {
  const {id, firstname, lastname, email} = userData;
  const { isAuth, Login, Logout } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const [tabs, setTabs] = useState({
    profile:false,
    medication: false,
    TandC: false,
    PP: false,
    calendar: true
  });

  const handleLogout = () => {
    Logout();
    localStorage.removeItem("userID");
    return navigate(`/`);
  };

  
  useEffect(()=>{
    handleProfileTabs(tabs);
  },[tabs])

  const handleCalendar = ()=>{
    setTabs({
      ...tabs,
      profile:false,
      medication: false,
      TandC: false,
      PP: false,
      calendar: true
    })
  }

  const handleMyProfile = ()=>{
    setTabs({
      ...tabs,
      profile:true,
      medication: false,
      TandC: false,
      PP: false,
      calendar: false
    })

  }

  const handleMedicationDetails = ()=>{
    setTabs({
      ...tabs,
      profile:false,
      medication: true,
      TandC: false,
      PP: false,
      calendar: false
    })
  }

  const handleTandC = ()=>{
    setTabs({
      ...tabs,
      profile:false,
      medication: false,
      TandC: true,
      PP: false,
      calendar: false
    })
  }

  const handlePrivacyPolicy = ()=>{
    setTabs({
      ...tabs,
      profile:false,
      medication: false,
      TandC: false,
      PP: true,
      calendar: false
    })
  }

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
          <FaCalendarAlt />
          <p onClick={handleCalendar} style={ tabs.calendar ? {color:"black"} : {color:"white"}}> Calendar</p>
        </div>
        <Divider />
        <div>
          <FaUserTie />
          <p onClick={handleMyProfile} style={ tabs.profile ? {color:"black"} : {color:"white"}}  > My Profile</p>
        </div>
        <Divider />
        <div>
          <FaAddressBook />
          <p> Contact Us </p>
        </div>
        <Divider />
        <div>
          <FaHeartbeat />
          <p onClick={handleMedicationDetails} style={ tabs.medication ? {color:"black"} : {color:"white"}}> Medication Details </p>
        </div>
        <Divider />
        <div>
           <FaUserShield /> 
          <p onClick={handlePrivacyPolicy} style={ tabs.PP ? {color:"black"} : {color:"white"}}> Privacy Policy</p>
        </div>
        <Divider />
        <div>
          <FaFileAlt />
          <p onClick={handleTandC} style={ tabs.TandC ? {color:"black"} : {color:"white"}}> Terms And Conditions</p>
        </div>
        <Divider />
        <div>
          <i class="fas fa-sign-out-alt"></i>
          <p onClick={onOpen}> Logout</p>
        </div>
      </div>

      <div>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>Are you sure you want to sign out ? </h1>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleLogout} colorScheme='teal' variant='solid' style={{marginRight:"20px"}}>Confirm</Button>
            <Button onClick={onClose} colorScheme='red' variant='outline'>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    </div>
  );
};

export default ProfileSection;
