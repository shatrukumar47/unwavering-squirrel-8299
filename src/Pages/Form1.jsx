import React, { useState } from "react";
import style from "./Form.module.css";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  HStack,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import {
  CalendarIcon,
  EditIcon,
  EmailIcon,
  LockIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";




const Form1 = ({goToNext}) => {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    
    // Toast feature
    const toast = useToast()
    const positions = ['top']

  const handleContactInfo = ()=>{
    goToNext();
    //Toast handle
    toast({
      title: `Welcome aboard, Shatrughan !`,
      description: `You've completed your Pill Alert profile. Let's add your medication`,
      position: positions[0],
      isClosable: true,
      duration: 3000,
      status: 'success',
    })
  }


  return (
    <div>
      <form className={style.step1}>
        <HStack>
          <FormControl>
            <FormLabel>First name : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EditIcon color="gray.300" />
              </InputLeftElement>
              <Input type="text" placeholder="First name" />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Last name : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EditIcon color="gray.300" />
              </InputLeftElement>
              <Input type="text" placeholder="Last name" />
            </InputGroup>
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel>Date of Birth : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CalendarIcon color="gray.300" />
            </InputLeftElement>
            <Input type="date" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Email : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input type="email" placeholder="Email address" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Password : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.300" />
            </InputLeftElement>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" style={{background:"white"}} onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
      <div className={style.button_form1}>
      <Button colorScheme="green" onClick={handleContactInfo}>Next</Button>
      </div>
    </div>
  );
};

export default Form1;
