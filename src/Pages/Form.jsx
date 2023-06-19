import React, { useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  Box,
  StepTitle,
  StepSeparator,
  useSteps
} from "@chakra-ui/react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import { AuthContext } from "../components/AuthContextProvier";


const Form = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [userID, setUserID] = useState()
  const [form2Data, setForm2Data] = useState({});
  const {isAuth, Login, Logout} = useContext(AuthContext);

  let steps ;
  if(isAuth){
    steps = [
      { title: "Medication Details-1", description: "Date & Time" },
      { title: "Medication Details-2", description: "Date & Time" },
    ];
  }else{
    steps = [
      { title: "Contact Info", description: "Contact Info" },
      { title: "Medication Details-1", description: "Date & Time" },
      { title: "Medication Details-2", description: "Date & Time" },
    ];
  }

  const getUserID = (id)=>{
    // console.log("user id => " +id);
    setUserID(id);
  }

  const getForm2Data = (data)=>{
    setForm2Data(data);
  }

  
  const abcd = useSteps({index: 0, count: steps.length, });
  const { activeStep,goToNext,goToPrevious } = abcd;

  return (
    <>
      <Modal
        size="3xl"
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please fill the Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* steppers */}
          <Stepper size='lg' index={activeStep} style={{marginBottom:"20px"}}>
            {steps.map((step, index) => (
                <Step key={index}>
                <StepIndicator>
                    <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                    />
                </StepIndicator>

                <Box flexShrink='0'>
                    <StepTitle>{step.title}</StepTitle>
                </Box>

                <StepSeparator />
                </Step>
            ))}
            </Stepper>
            
            {/* steppers end */}
            {
              !isAuth ?  (activeStep ===0 ?  <Form1 goToNext={goToNext} getUserID ={getUserID} /> : activeStep===1 ? <Form2 goToNext={goToNext} userID={userID} getForm2Data={getForm2Data} /> : <Form3 goToPrevious={goToPrevious} goToNext={goToNext} form2Data={form2Data} />) : (activeStep===0 ? <Form2 goToNext={goToNext} userID={userID} getForm2Data={getForm2Data} /> : <Form3 goToPrevious={goToPrevious} goToNext={goToNext} form2Data={form2Data} />)
            }
          
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Form;
