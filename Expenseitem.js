import React,{ useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./Expenseitem.css";
//import ExpenseDetails from './ExpenseDetails';

const ExpenseItem=(props)=> {
 
const [title, setTitle] = useState(props.title);
//console.log('expenseItem evaluated by React')
const [amount, setAmount]= useState(props.amount)

  //nw to change the 'title'
 
  const Clickhandler= () =>{
    setTitle('Updated');
    console.log(title)
  }

  const ExpenseHandler=()=>{
    setAmount(100)
    console.log(amount)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">Rs. {amount}</div>
      </div>
      {/* <ExpenseDetails amount={props.amount} 
title={props.title} />  */}

 
      <button onClick={Clickhandler}>Change Title</button>
      <button onClick={ExpenseHandler}>Change Expense</button>
    </Card>
  );
}
export default ExpenseItem;
