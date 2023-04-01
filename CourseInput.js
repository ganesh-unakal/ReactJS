import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid]=useState(true)
  // const [buttonNotClicked,buttonisClik]=useState('')

  const goalInputChangeHandler = event => {
    if(event.target.value.length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0) { //trim() is remove the white space
      setIsValid(false)
    return
    }
    props.onAddGoal(enteredValue);
  };

  // const buttonClick= event=>{
  //   if(event.target.value.(buttonisClik))
  // }


  // function handleAddGoalClick() {
  //   if (isInputValid) {
  //     // TODO: Add the goal
  //     setGoal('');
  //     setIsValid(false);
  //   }
  // }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
