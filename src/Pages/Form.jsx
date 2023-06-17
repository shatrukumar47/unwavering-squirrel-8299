import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  Box,
  StepTitle,
  StepSeparator,
  useSteps,
  Select,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import style from "./Form.module.css"
import { BellIcon, CalendarIcon, EditIcon, EmailIcon, LockIcon, PhoneIcon, PlusSquareIcon, SmallAddIcon } from "@chakra-ui/icons";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";


const steps = [
    { title: "Contact Info", description: "Contact Info" },
    { title: "Medication Details-1", description: "Date & Time" },
    { title: "Medication Details-2", description: "Date & Time" },
];


const Form = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  
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
                activeStep===0?  <Form1 goToNext={goToNext} /> : activeStep===1 ? <Form2 goToNext={goToNext} /> : <Form3 goToPrevious={goToPrevious} goToNext={goToNext} />
            }
          
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" onClick={goToPrevious} mr={3}>
              Previous
            </Button>
            <Button colorScheme="green" onClick={goToNext}>Next</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Form;
