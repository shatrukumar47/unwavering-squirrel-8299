import React, { useEffect, useState } from 'react'
import style from "./MyProfile.module.css"
import { Avatar, Button, Divider, Heading, Select, VStack } from '@chakra-ui/react'
import { IoCreateOutline,IoEyeSharp } from "react-icons/io5";
import {
  FormControl,
  FormLabel,
  Input,
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
  PhoneIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import axios from 'axios';

const MyProfile = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    let userId = JSON.parse(localStorage.getItem("userID")) || 1;
    axios.get(`https://mock-servee-pillreminder.onrender.com/users/${userId}`).then((res)=>{
      console.log(res.data)
      setUserData(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])


  const handleChange = (e)=>{
    

  }

  const handleUpdateUser = ()=>{

  }




  return (
    <div className={style.container}>
        <div className={style.upperDiv}>
          <div>
            <Avatar size='2xl' name='Segun Adebayo' src='https://img.freepik.com/free-icon/user_318-875902.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=ais' />{' '}
            <div>
              <Heading as='h3' size='md'>{userData.firstname} {userData.lastname}</Heading>
              <p><EmailIcon /> {userData.email}</p>
              <p><PhoneIcon />+91 {"XXXXXXXXXX"}</p>
            </div>
          </div>
          <IoCreateOutline style={{fontSize:"40px", color:"#070E39"}} onClick={handleClick} />
        </div>
        <Divider style={{margin:"15px"}} />
        <div className={style.lowerDiv}>
            <form className={style.step1}>
             <VStack style={{gap:"30px", marginTop:"50px"}}>
                <HStack style={{justifyContent:"space-between", gap:"30px", width:"100%"}}>
                  <FormControl>
                    <FormLabel>First name : </FormLabel>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <EditIcon color="gray.300" />
                      </InputLeftElement>
                      <Input
                        type="text"
                        name="firstname"
                        value={userData.firstname}
                        placeholder="First name"
                        onChange={handleChange}
                        disabled={show}
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
                        value={userData.lastname}
                        placeholder="Last name"
                        onChange={handleChange}
                        disabled={show}
                      />
                    </InputGroup>
                  </FormControl>
                </HStack>
                
                <HStack style={{justifyContent:"space-between", gap:"30px", width:"100%"}}>
                    <FormControl>
                      <FormLabel>Date of Birth : </FormLabel>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <CalendarIcon color="gray.300" />
                        </InputLeftElement>
                        <Input
                          type="date"
                          name="dateOfBirth"
                          value={userData.dateOfBirth}
                          onChange={handleChange}
                          disabled={show}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel>Gender : </FormLabel>
                      <Select placeholder='Gender' onChange={handleChange} >
                          <option value='male'>Male</option>
                          <option value='female'>Female</option>
                          <option value='other'>Other</option>
                      </Select>
                    </FormControl>
                </HStack>

                <FormControl>
                  <FormLabel>Phone Number : </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <PhoneIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="tel"
                      placeholder="Mobile Number"
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
                      value={userData.email}
                      placeholder="Email address"
                      onChange={handleChange}
                      disabled={show}
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
                      // type={show ? "text" : "password"}
                      type='text'
                      placeholder="Enter password"
                      onChange={handleChange}
                      name="password"
                      value={userData.password}
                      disabled={show}
                    />
                    <InputRightElement width="4.5rem">
                      <IoEyeSharp />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button colorScheme='blue' variant='outline' isDisabled={show} onClick={handleUpdateUser}>
                  Save Changes
                </Button>
             </VStack>
            
          </form>
        </div>
    </div>
  )
}

export default MyProfile
