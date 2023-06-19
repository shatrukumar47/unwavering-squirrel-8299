import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import style from "./CalendarSection.module.css";
import { SmallAddIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import Form from "../Pages/Form";


const CalendarSection = ({id, userId, medicine, medicineForm, healthCondition, days, frequency, instruction, reminders, startDate}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)



  return (
    <div className={style.container}>
      <div className={style.info}>
            <span>Health Condition :</span>
            <h1>{healthCondition}</h1>
            <span>Start Date : </span>
            <h1>{startDate}</h1>
            <span>Days : </span><h1>{days?.join(" , ").toUpperCase()}</h1>
            <span>Instructions ? : </span>
            <h1>{instruction}</h1>

      </div>
      <div className={style.calendar}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          events={[
            { title: "Medication Started", date: startDate },
          ]}
        />
        <div className={style.wrap}>
          
          <button className={style.button} onClick={onOpen} ><SmallAddIcon fontSize="25px"/> Medication</button>
        </div>

        {/* modal */}
        <Form isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
    
  );
};

export default CalendarSection;
