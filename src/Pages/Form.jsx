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


const steps = [
    { title: "Contact Info", description: "Contact Info" },
    { title: "Pill Reminder Details", description: "Date & Time" },
  ];

const days = ["Mon", "Tues", "Wed" , "Thurs", "Fri", "Sat", "Sun"]


const Form = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  
  const abcd = useSteps({index: 0, count: steps.length, });
  const { activeStep,goToNext,goToPrevious } = abcd;
  console.log(activeStep)

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
                activeStep===0?  <div className={style.step1}>
                <FormControl>
                  <FormLabel>First name : </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <EditIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='text' placeholder='First name' />
                </InputGroup>
                </FormControl>
    
                <FormControl mt={4}>
                  <FormLabel>Last name : </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <EditIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='text' placeholder='Last name' />
                </InputGroup>
                </FormControl>
    
                <FormControl mt={4}>
                  <FormLabel>Date of Birth : </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <CalendarIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='date' />
                </InputGroup>
                </FormControl>
    
                <FormControl mt={4}>
                  <FormLabel>Email : </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <EmailIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='email' placeholder='Email address' />
                </InputGroup>
                </FormControl>
    
                <FormControl mt={4}>
                  <FormLabel>Password : </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <LockIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='password' placeholder='Password' />
                </InputGroup>
                </FormControl>
                </div> : <div className={style.step2}>
                    <FormControl>
                    <FormLabel>What med would you like to add : </FormLabel>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <SmallAddIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='text' placeholder='Medicine name' />
                </InputGroup>
                    </FormControl>

                    <FormControl>
                    <FormLabel>What is the form of medicine : </FormLabel>
                    <Select placeholder='Form of Medicine'>
                        <option value='pill'>Pill</option>
                        <option value='injection'>Injection</option>
                        <option value='syrup'>Syrup</option>
                        <option value='drops'>Drops</option>
                        <option value='inhaler'>Inhaler</option>
                        <option value='powder'>Powder</option>
                    </Select>
                    </FormControl>

                    <FormControl>
                    <FormLabel>What are you taking it for : </FormLabel>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <PlusSquareIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='text' placeholder='Health condition' />
                    </InputGroup>
                    </FormControl>

                    <FormControl>
                    <FormLabel>Select Days : </FormLabel>
                    {
                        days?.map((item,i)=>{
                            return <Checkbox key={i} colorScheme='green' style={{marginRight:"10px"}}> {item} </Checkbox>
                        })
                    }
                    </FormControl>

                    <FormControl>
                    <FormLabel>Daily dosage frequency : </FormLabel>
                    <Select placeholder='Medication frequency per day'>
                        <option value='once'>Once a day</option>
                        <option value='twice'>Twice a day</option>
                        <option value='thrice'>Thrice a day</option>
                    </Select>
                    </FormControl>

                  <FormControl mt={4}>
                  <FormLabel>Set Reminder : </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                    <BellIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='datetime-local' />
                </InputGroup>
                </FormControl>

                <FormControl>
                    <FormLabel>Write Note : </FormLabel>
                    <Textarea placeholder='Anthing to note? (optional)' />
                </FormControl>

                </div> 
            }
           
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={goToPrevious} mr={3}>
              Previous
            </Button>
            <Button colorScheme="green" onClick={goToNext}>Next</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Form;
