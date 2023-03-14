import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import "./calculator.css"
import {getUser} from "../feature/Slices"

export const Calculator = () => {
  const [parent, setParent] = useState("");
  const [children, setchildren] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  const handleClick = (event, callback) => {
    callback(event)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getUser({
      parent: parent,
      children: children,
      gender: gender
    }));
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Do you have Parents?</h1>
      <div className='InputContainer'>
        <span className={parent === "Yes" ? "select" : ''} onClick={() => handleClick("Yes",setParent)}>Yes</span>
        <span className={parent === "No" ? "select" : ''} onClick={() => handleClick("No", setParent)}>No</span>
      </div>
      <h1>Do you have any children? </h1>
      <div className='InputContainer'>
      <span className={children === "Yes" ? "select" : ''} onClick={() => handleClick("Yes", setchildren)}>Yes</span>
        <span className={children === "No" ? "select" : ''} onClick={() => handleClick("No", setchildren)}>No</span>
      </div>

        <h1>What’s your gender?</h1>
        <div className='InputContainer'>
        <span className={gender === "Male" ? "select" : ''} onClick={() => handleClick("Male",setGender)}>Male</span>
        <span className={gender === "Female" ? "select" : ''} onClick={() => handleClick("Female", setGender)}>Female</span>
      </div>
      <button type="submit">Done</button>
    </form>
  )
}
