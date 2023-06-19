import React, { useContext, useState } from 'react'
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
    InputGroup,
    InputLeftElement,
    InputRightElement,
    useToast,
  } from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AuthContext } from '../components/AuthContextProvier';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import axios from 'axios';

const Login = ({isOpen, onClose}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isAuth, Login, Logout} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  let localStorageID = JSON.parse(localStorage.getItem("userID")) || "";

  // Toast feature
  const toast = useToast();
  const positions = ["top"];

  const handleLogin = async ()=>{
    setLoading(true);


    const resp = await axios({
        method : "get",
        url : `https://mock-servee-pillreminder.onrender.com/users?email=${email}`
    })

    if(resp.status === 200){
        console.log(resp)
        if(resp.data.length > 0){
            if(resp.data[0].password === password){
                console.log(resp);
                localStorage.setItem("userID", JSON.stringify(resp.data[0].id));
                Login(resp.data[0].id)
                return navigate(`/dashboard`)
            }else{
                console.log("password not currect");
                        //Toast error handle
                toast({
                    title: `Wrong user id or password !`,
                    position: positions[0],
                    isClosable: true,
                    duration: 1000,
                    status: "error",
                });
            }
        }else{
            console.log("user not ")
            toast({
                title: `User not found !`,
                position: positions[0],
                isClosable: true,
                duration: 1000,
                status: "error",
            });
        }

    }


    setLoading(false);
  }

//   console.log(object)

  if(isAuth){
    return <Navigate to="/dashboard" replace={false} />
  }
//   if(loading){
//     return <Loading />
//   }

  return (
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Sign in</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
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
              onChange={(e)=> setEmail(e.target.value)}
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
              onChange={(e)=> setPassword(e.target.value)}
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
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleLogin} >
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default Login
