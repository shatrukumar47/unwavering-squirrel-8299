import React, { useState } from 'react'
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
    HStack,
    VStack,
    useToast,
  } from "@chakra-ui/react";
import { BellIcon, CalendarIcon, EditIcon, EmailIcon, LockIcon, PhoneIcon, PlusSquareIcon, SmallAddIcon } from "@chakra-ui/icons";
import style from "./Form.module.css"

const days = ["Mon", "Tues", "Wed" , "Thurs", "Fri", "Sat", "Sun"];

const Form3 = ({goToNext, goToPrevious}) => {
    const [dozeFrequency, setDozeFrequency] = useState(0);
    const frequency = new Array(dozeFrequency).fill(0);
    const [checkPrevStat, setCheckPrevState] = useState(false)
    // console.log(frequency)

    // Toast feature
    const toast = useToast()
    const positions = ['top']
    

    // handle form submit
    const handleSubmit = ()=>{
        goToNext();
        setCheckPrevState(true);
        toast({
          title: `📆`,
          description: `You have successfully added the medicine`,
          position: positions[0],
          isClosable: true,
          duration: 3000,
          status: 'success',
        })
    }

    console.log(checkPrevStat)

  return (
    <div>
      <form className={style.step3}>

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
            <Select placeholder='Medication frequency per day' onChange={(e)=> setDozeFrequency(+e.target.value) }>
                <option value='1'>Once a day</option>
                <option value='2'>Twice a day</option>
                <option value='3'>Thrice a day</option>
            </Select>
        </FormControl>
        <HStack style={{justifyContent:"flex-start", gap:"80px"}}>
        {
            frequency?.map((item,i)=>{
                return <VStack>
                        <FormControl >
                            <FormLabel>Set time for Pill : {i+1}</FormLabel>
                            <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                            <BellIcon color='gray.300' />
                            </InputLeftElement>
                            <Input type='time' />
                            </InputGroup>
                        </FormControl>

                        <FormControl>
                        <Select>
                            <option value='1'>Before eating</option>
                            <option value='2'>After eating</option>
                            <option value='3'>While eating</option>
                        </Select>
                        </FormControl>
                </VStack>
            })
        }
        </HStack>
        
        <FormControl>
            <FormLabel>Add instructions : </FormLabel>
            <Textarea placeholder='Anthing to note? (optional)' />
        </FormControl>
      </form>

      <div className={style.button_form3}>
        <Button isDisabled={checkPrevStat} colorScheme="blue" onClick={goToPrevious} mr={3} variant="outline" > Previous </Button>
        <Button isDisabled ={checkPrevStat} colorScheme="green" onClick={handleSubmit}>Submit</Button>
      </div>

    </div>
  )
}

export default Form3
