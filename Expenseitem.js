//nw we importing specifically named thing in the react library. nw we importing function here 'useState' 
//this function allows us to  .where changes to the values shld reflect in component being called again


import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./Expenseitem.css";
//import ExpenseDetails from './ExpenseDetails';

const ExpenseItem=(props)=> {
  //now we acces the the outside of data by using 'props' parameter

  //useSatet function takes 2 value 
  //usestate execute 2 elements...1st state value execute 'current state value'& 2nd is updated value
//const [title, setTitle] = useState(props.title);
//console.log('expenseItem evaluated by React')
//const [amount, setAmount]= useState(props.amount)

  //nw to change the 'title'
 
 // const Clickhandler= () =>{
    //serTitle takes new argument called'Updated'
   // setTitle('Updated');
   // console.log(title)
 //}

  //const ExpenseHandler=()=>{
   // setAmount(100)
   // console.log(amount)
  //}



  /*//nw we adding add eventliistner that takes the 'function' 
  const Clickhandler=()=>{
    console.log('clicked');
  }*/

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title} </h2>
        
        <div className="expense-item__price">Rs. {props.amount}</div>
      </div>
      {/* <ExpenseDetails amount={props.amount} 
title={props.title} />  */}


      
      {/*<button onClick={Clickhandler}>Change Title</button>
      <button onClick={ExpenseHandler}>Change Expense</button>*/}
    </Card>
  );
}
// we need to export thz function otherwise its only
//usable inside of file & thats not helpful us
export default ExpenseItem;
