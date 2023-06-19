import React, { useContext, useEffect, useState } from "react";
import style from "./Dashboard.module.css";
import ProfileSection from "../components/ProfileSection";
import DetailsSection from "../components/DetailsSection";
import CalendarSection from "../components/CalendarSection";
import axios from "axios";
import { AuthContext } from "../components/AuthContextProvier";
import MyProfile from "../ProfileComponents/MyProfile";
import MedicationDetails from "../ProfileComponents/MedicationDetails";
import TermsAndCond from "../ProfileComponents/TermsAndCond";
import PrivacyPolicy from "../ProfileComponents/PrivacyPolicy";

const Dashboard = () => {

  const [userData, setUserData] = useState({});
  const [medication, setMedication] = useState([]);
  const {isAuth, Login, Logout} = useContext(AuthContext);
  const [tabs, setTabs] = useState({
    profile:false,
    medication: false,
    TandC: false,
    PP: false
  });

   let userId = JSON.parse(localStorage.getItem("userID")) || 1;

  async function fetchUserInfo() {
    try {
      const resp = await axios({
        method: "GET",
        url: `https://mock-servee-pillreminder.onrender.com/users/${userId}`,
      });
      
      resp.data.medications.map(async(item)=>{
        const res = await axios({
          method: "GET",
          url: `https://mock-servee-pillreminder.onrender.com/medications/${item}`,
        });
        setMedication(res.data)
      })
      setUserData(resp.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  // console.log(userData);
  console.log(medication);

  const handleProfileTabs = (Tabs)=>{
    console.log("dash")
    setTabs(Tabs)
  }


  return (
    <div className={style.container}>
      <div className={style.dashboard}>
        <ProfileSection userData={userData} handleProfileTabs= {handleProfileTabs} />
         {tabs.profile ? <MyProfile /> : tabs.medication? <MedicationDetails /> : tabs.TandC? <TermsAndCond /> : tabs.PP? <PrivacyPolicy /> : <CalendarSection {...medication} />}
        <DetailsSection {...medication} />
      </div>
    </div>
  );
};

export default Dashboard;
