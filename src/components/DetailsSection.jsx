import React, { useEffect, useState } from 'react'
import style from "./DetailsSection.module.css"
import { IoAlarm,IoAlarmOutline } from "react-icons/io5";

const DetailsSection = ({id, userId, medicine, medicineForm, healthCondition, days, frequency, instruction, reminders, startDate}) => {

  const [todayflag, setTodayFlag] = useState(true);
  const [tomoFlag, setTomoFlag] = useState(true);

  useEffect(()=>{
    // const weekdays = [ 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

    // const today = new Date().getDay();
    // const todayday = weekdays[today];
  
    // const tomorrow = (today + 2)%7
    // const tomoDay = weekdays[tomorrow];
    // if(days?.includes(tomoDay)){
    //   setTomoFlag(true)
    // }
    // if(days?.includes(todayday)){
    //   setTodayFlag(true)
    // }
  },[])
  return (
    <div className={style.container}>
        
        <div className={style.box1}>
          <h1 style={{fontSize:"20px", fontWeight:"bolder", color:"green"}}>Today</h1>
          <h1 style={{fontWeight:"bold", marginTop:"10px"}}>Take Medicine</h1>
          <div className={style.box1_child}>
              {
               todayflag ? reminders?.map((item)=>{
                  return <div key={item.id}>
                      <div>
                        <IoAlarmOutline color='red' />
                        <p>{medicine}</p>
                      </div>
                      <span style={{marginLeft:"30px", fontSize:"13px", color:"grey"}}>1 {medicineForm} , at <span style={{color:"green", fontWeight:"bold", fontSize:"16px"}}>{item.time}</span> {item.description}</span>
                </div>
                }) : <h1>No Pill for Today</h1>
              }
          </div>
        </div>

        <div className={style.box2}>
          <h1 style={{fontSize:"20px", fontWeight:"bolder", color:"orange"}}>Tomorrow</h1>
          <h1 style={{fontWeight:"bold", marginTop:"10px"}}>Take Medicine</h1>
          <div className={style.box2_child}>
              {
                tomoFlag ? reminders?.map((item)=>{
                  return <div>
                      <div>
                        <IoAlarmOutline color='red' />
                        <p>{medicine}</p>
                      </div>
                      <span style={{marginLeft:"30px", fontSize:"13px", color:"grey"}}>1 {medicineForm} , at <span style={{color:"orange", fontWeight:"bold", fontSize:"16px"}}>{item.time}</span> {item.description}</span>
                </div> 
                }) : <h1>No Pill for Tomorrow</h1>
              }
          </div>
        </div>

        <img src="https://cdn.dribbble.com/users/392575/screenshots/5518208/media/af6a9828cc9645b6708f34be8bcef0ba.gif" alt="alarm" style={{background:"black"}} />
    </div>
  )
}

export default DetailsSection
