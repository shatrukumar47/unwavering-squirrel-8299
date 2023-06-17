import React from 'react'
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
  import { BellIcon, CalendarIcon, EditIcon, EmailIcon, LockIcon, PhoneIcon, PlusSquareIcon, SmallAddIcon } from "@chakra-ui/icons";
  import style from "./Form.module.css"

  

const Form2 = ({goToNext}) => {
  return (
    <div>
      <form className={style.step2}>
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

            <FormControl >
            <FormLabel>Set start date : </FormLabel>
            <InputGroup>
            <InputLeftElement pointerEvents='none'>
            <BellIcon color='gray.300' />
            </InputLeftElement>
            <Input type='date' />
            </InputGroup>
            </FormControl>
        </form> 
        <div className={style.button_form2}>
            <Button colorScheme="green" onClick={goToNext} variant="outline">Next</Button>
        </div>
    </div>
  )
}

export default Form2
