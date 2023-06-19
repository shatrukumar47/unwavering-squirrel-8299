import React, { useState, useContext } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Select,
    InputGroup,
    InputLeftElement,
  } from "@chakra-ui/react";
  import { BellIcon, PlusSquareIcon, SmallAddIcon } from "@chakra-ui/icons";
  import style from "./Form.module.css"
  import { AuthContext } from '../components/AuthContextProvier';


  

const Form2 = ({goToNext, userID,getForm2Data}) => {
  const [medicationDetails_1Data, setMedicationDetailsData] = useState({
    "medicine":"",
    "medicineForm": "",
    "healthCondition": "",
    "startDate": ""
  });

  const {isAuth, Login, Logout, userId} = useContext(AuthContext);

  const {medicine, medicineForm, healthCondition, startDate} = medicationDetails_1Data;
  const handleChange = (e)=>{
      const {name, value} = e.target;
      setMedicationDetailsData({
        ...medicationDetails_1Data,
        [name]: value
      })
  }
  const handleMedicationInfo = ()=>{
    console.log("user id => " +userID);
    console.log(isAuth ? userId : userID )
    const d = {
      userId : isAuth ? userId : userID,
      ...medicationDetails_1Data
    }

    getForm2Data(d);
    goToNext();
  }



  return (
    <div>
      <form className={style.step2}>
            <FormControl>
            <FormLabel>What med would you like to add : </FormLabel>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <SmallAddIcon color='gray.300' />
            </InputLeftElement>
            <Input type='text' name='medicine' value={medicine} placeholder='Medicine name' onChange={handleChange} />
            </InputGroup>
            </FormControl>

            <FormControl>
            <FormLabel>What is the form of medicine : </FormLabel>
            <Select name='medicineForm' value={medicineForm} placeholder='Form of Medicine' onChange={handleChange} >
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
            <Input type='text' name='healthCondition' value={healthCondition} placeholder='Health condition' onChange={handleChange} />
            </InputGroup>
            </FormControl>

            <FormControl >
            <FormLabel>Set start date : </FormLabel>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <BellIcon color='gray.300' />
            </InputLeftElement>
            <Input type='date' name='startDate' value={startDate} onChange={handleChange} />
            </InputGroup>
            </FormControl>
        </form> 
        <div className={style.button_form2}>
            <Button colorScheme="green" onClick={handleMedicationInfo} variant="outline">Next</Button>
        </div>
    </div>
  )
}

export default Form2
