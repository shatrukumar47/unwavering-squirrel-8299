import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import style from "./Home.module.css"
import Form from "./Form";
import {
  useDisclosure, Button, Heading, Highlight
} from '@chakra-ui/react'
import { AuthContext } from "../components/AuthContextProvier";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {isAuth} = useContext(AuthContext)
  
  return (
    <div className={style.container} >
      <div className={style.banner1} >
        <div>
        <div style={{background:"white", marginLeft:"20px"}}>
          <div className={style.textContainer}>
            <Heading lineHeight='tall' className={style.h1}>
              <Highlight
                query='Health Revolution'
                styles={{ px: '2', py: '1', rounded: 'full', bg: '#95B6FB', color:"white" }}
              >
                Join the Health Revolution
              </Highlight>
            </Heading>
            {/* <h1>Join the Health Revolution</h1>
            <h1> It's Time. </h1> */}
            <p>Staying on top of your health is only a few taps away. Start by creating your profile to personalize your experience.</p>
          </div>
          <div className={style.gettingStarted}>
          <h2>Your Journey Starts here</h2>
          <Button
            _hover={{borderRadius:"20px", transition:"border-radius 0.3s ease-in-out 0s" }}
            colorScheme="blue"
            variant="outline"
            size="lg"
            onClick={onOpen}
          > {isAuth ? "Add Medications" : "Getting Started"} <FontAwesomeIcon icon={faArrowRight} style={{background:"white", marginLeft:"10px"}} /></Button>
          </div>
        </div>
          <img
            src="https://img.freepik.com/free-vector/health-insurance-abstract-concept-vector-illustration-health-insurance-contract-medical-expenses-claim-application-form-agent-consultation-sign-document-emergency-coverage-abstract-metaphor_335657-1356.jpg?w=826&t=st=1686766024~exp=1686766624~hmac=d66f07ccb23916c560fc268cb455c005ea200f558abb57e63188031d439f7c5b"
            alt="" />
        </div>
      </div>
      <div className={style.banner2}>
        <div>
          <div className={style.banner2_child1}>
              <h1> "Never Miss a Dose Again!" <br /> Get started today and experience the peace of mind of never missing a dose.</h1> 
              <img src="https://img.freepik.com/free-photo/medication-black_1150-13889.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais" alt="" />
            </div>
            <div className={style.banner2_child2}>
              <img src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/Metabolic.png?auto=format" alt="" />
              <h1>Set up personalized medication schedules and receive timely reminders. Take control of your health and never forget to take your pills.</h1> 
            </div>
        </div>
      </div>
      <div className={style.banner3}>
          <div className={style.banner3_child1}>
             <h1>Stay organized and stay healthy with our intuitive pill reminder tool.</h1>
             <p>Achieve better medication adherence and improve your well-being.</p>
          </div>
          <div className={style.banner3_child2}>
             <div className={style.banner3_child2_box1}>
                <h3>Smart Medication Management</h3>
                <p>Experience the convenience of automated reminders.</p>
                <p>Stay connected and in control of your health with our cutting-edge solution.</p>
                <img src="https://img.freepik.com/free-vector/contraception-methods-concept-illustration_114360-3592.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais" alt="" />
             </div>
             <div className={style.banner3_child2_box1}>
                <h3>Personalized Reminders</h3>
                <p>Stay on top of your health with reminders designed just for you</p>
                <p>Set up reminders based on your unique needs and preferences.</p>
                <img src="https://img.freepik.com/free-vector/career-progress-concept-illustration_114360-2571.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais" alt="" />
             </div>
             <div className={style.banner3_child2_box1}>
                <h3>Sync Across Devices</h3>
                <p>Seamlessly sync your medication data across all your devices.</p>
                <p>Stay connected to your medication schedule on the go for ultimate convenience.</p>
                <img src="https://img.freepik.com/free-vector/real-time-sync-concept-illustration_114360-457.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais" alt="" />
             </div>
          </div>
      </div>

      {/* modal */}
      <Form isOpen={isOpen} onClose={onClose} />

    </div>
  );
};

export default Home;
