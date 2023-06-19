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

import axios from "axios";

async function checkExistsUser(email) {
  try {
    const response = await axios.get(
      "https://mock-servee-pillreminder.onrender.com/users/"
    );
    if (response.status === 200) {
      console.log(response.data);
      const filteredData = response.data.filter((user) => user.email == email);
      if (filteredData.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

const Form1 = ({ goToNext, getUserID }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [contactInfoData, setContactInfoData] = useState({
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    email: "",
    password: "",
    medications: [],
  });
  const { firstname, lastname, dateOfBirth, email, password } = contactInfoData;
  let localStorageID = JSON.parse(localStorage.getItem("userID")) || "";

  // Toast feature
  const toast = useToast();
  const positions = ["top"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfoData({
      ...contactInfoData,
      [name]: value,
    });
  };

  const handleContactInfo = async () => {
    // Send a POST request
    try {
      if (
        contactInfoData.email &&
        contactInfoData.firstname &&
        contactInfoData.lastname &&
        contactInfoData.dateOfBirth &&
        contactInfoData.password
      ) {
          const id = Math.floor(1000 + Math.random() * 9000);
          const res = await axios({
            method: "post",
            url: "https://mock-servee-pillreminder.onrender.com/users/",
            data: {
              id: id,
              ...contactInfoData,
            },
          });

          if (res.status === 201) {
            //Toast handle
            toast({
              title: `Welcome aboard, ${contactInfoData?.firstname} !`,
              description: `You've completed your Pill Alert profile. Let's add your medication`,
              position: positions[0],
              isClosable: true,
              duration: 3000,
              status: "success",
            });
            localStorage.setItem("userID", JSON.stringify(id));
            getUserID(id);
            goToNext();
          }

      } else {
        //Toast error handle
        toast({
          title: `Please! Fill all the details`,
          description: `all fields are required`,
          position: positions[0],
          isClosable: true,
          duration: 3000,
          status: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <Input
                type="text"
                name="firstname"
                value={firstname}
                placeholder="First name"
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Last name : </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EditIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                name="lastname"
                value={lastname}
                placeholder="Last name"
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel>Date of Birth : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CalendarIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Email : </FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="Email address"
              onChange={handleChange}
            />
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
              onChange={handleChange}
              name="password"
              value={password}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                style={{ background: "white" }}
                onClick={handleClick}
              >
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
      <div className={style.button_form1}>
        <Button colorScheme="green" onClick={handleContactInfo}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Form1;
