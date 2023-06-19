import { Button } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import style from "./PageNotFound.module.css"
import { useNavigate } from 'react-router-dom';


const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <img src="https://cdn.dribbble.com/users/1665077/screenshots/10738715/media/90712c2d7fd869e9d7586a108024d62c.gif" alt="" />
      <h1>404</h1>
      <h1>Error</h1>
      <h1>Page Not Found</h1>
      <Button
            _hover={{borderRadius:"20px", transition:"border-radius 0.3s ease-in-out 0s" }}
            colorScheme="blue"
            variant="outline"
            size="lg"
            onClick={()=> navigate("/") }
          > Go Back  <FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px"}} /></Button>
    </div>
  )
}

export default PageNotFound
