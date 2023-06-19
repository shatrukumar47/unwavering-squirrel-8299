import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Textarea,
  HStack,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import style from "./Form.module.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const checkboxDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const Form3 = ({ goToNext, goToPrevious, form2Data }) => {
  const [dozeFrequency, setDozeFrequency] = useState(0);
  const frequencyArray = new Array(dozeFrequency).fill(0);
  const [checkPrevStat, setCheckPrevState] = useState(false);
  const [dayFre, setDayFre] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [instruction, setInstruction] = useState("");
  const navigate = useNavigate();

  // taking input of days checkbox
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setDayFre((pre) => {
        return [e.target.value, ...dayFre];
      });
    } else {
      const d = dayFre.filter((item) => item !== e.target.value);
      setDayFre(d);
    }
  };

  // taking input of doze frequency
  const frequencyHandler = (e) => {
    setDozeFrequency(+e.target.value);
  };

  // taking input of pill time and description
  const pillSelectHandler = (e, index) => {
    const { name, value } = e.target;

    // Update the corresponding item in the reminders array
    setReminders((prevReminders) => {
      const updatedReminders = [...prevReminders];
      updatedReminders[index] = {
        ...updatedReminders[index],
        id: index,
        [name]: value,
      };
      return updatedReminders;
    });
  };

  // handling instruction input text
  const handleText = (e) => {
    const { value } = e.target;
    setInstruction(value);
  };

  // Toast feature
  const toast = useToast();
  const positions = ["top"];

  // collecting all medical data
  function collectionAllData() {
    let id = Math.floor(1000 + Math.random() * 9000);
    let data = {
      id: id,
      ...form2Data,
      days: dayFre,
      frequency: dozeFrequency,
      reminders: reminders,
      instruction: instruction,
    };
    return data;
  }

  // handle form submit
  const handleSubmit = async () => {
    let data = collectionAllData();
    data.userId = JSON.parse(localStorage.getItem("userID")) || 1;
    console.log(data)
    // Send a POST request
    try {

      if (
        data.medicine &&
        data.medicineForm &&
        data.healthCondition &&
        data.startDate &&
        data.frequency &&
        data.instruction
      ) {
        const res = await axios({
          method: "post",
          url: "https://mock-servee-pillreminder.onrender.com/medications/",
          data: data,
        });

        if (res.status === 201) {

          console.log(data.userId)

          //update the medications id in user list
          const resp = await axios({
            method: "PATCH",
            url: `https://mock-servee-pillreminder.onrender.com/users/${data.userId}`,
            data: {
              "medications": [data.id]
            },
          });

          if (resp.status === 200) {
            //Toast handle
            toast({
              title: `📆`,
              description: `You have successfully added the medicine`,
              position: positions[0],
              isClosable: true,
              duration: 3000,
              status: "success",
            });
            return navigate(`/dashboard`)
            goToNext();
            setCheckPrevState(true);
          }
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
      <form className={style.step3}>
        <FormControl>
          <FormLabel>Select Days : </FormLabel>
          {checkboxDays?.map((item, i) => {
            return (
              <Checkbox
                key={i}
                colorScheme="green"
                style={{ marginRight: "10px" }}
                onChange={handleCheckbox}
                value={item}
              >
                {" "}
                {item}{" "}
              </Checkbox>
            );
          })}
        </FormControl>

        <FormControl>
          <FormLabel>Daily dosage frequency : </FormLabel>
          <Select
            placeholder="Medication frequency per day"
            onChange={frequencyHandler}
            value={dozeFrequency}
          >
            <option value="1">Once a day</option>
            <option value="2">Twice a day</option>
            <option value="3">Thrice a day</option>
          </Select>
        </FormControl>
        <HStack style={{ justifyContent: "flex-start", gap: "80px" }}>
          {frequencyArray?.map((item, i) => {
            const reminder = reminders[i] || {}; // Get the reminder object for the current index
            return (
              <VStack key={i}>
                <FormControl>
                  <FormLabel>Set time for Pill : {i + 1}</FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <BellIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="time"
                      name="time"
                      value={reminder.time || ""}
                      onChange={(e) => pillSelectHandler(e, i)} // Pass the index to the handler
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <Select
                    name="description"
                    value={reminder.description || ""}
                    onChange={(e) => pillSelectHandler(e, i)} // Pass the index to the handler
                  >
                    <option value="Before eating">Before eating</option>
                    <option value="After eating">After eating</option>
                    <option value="While eating">While eating</option>
                  </Select>
                </FormControl>
              </VStack>
            );
          })}
        </HStack>

        <FormControl>
          <FormLabel>Add instructions : </FormLabel>
          <Textarea
            placeholder="Anthing to note? (optional)"
            onChange={handleText}
            name="instruction"
            value={instruction}
          />
        </FormControl>
      </form>

      <div className={style.button_form3}>
        <Button
          isDisabled={checkPrevStat}
          colorScheme="blue"
          onClick={goToPrevious}
          mr={3}
          variant="outline"
        >
          {" "}
          Previous{" "}
        </Button>
        <Button
          isDisabled={checkPrevStat}
          colorScheme="green"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form3;
