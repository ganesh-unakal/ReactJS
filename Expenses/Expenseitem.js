// return (
// <div className='expense-item'>
// <ExpenseDate date ={props.date} />
// <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
// <div>)

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './Expenseitem.css';
//import ExpenseDetails from './ExpenseDetails';


function ExpenseItem(props){
//now we acces the the outside of data


return (
  <Card className="expense-item">
    <ExpenseDate date={props.date} />
    <div className="expense-item__description">
    <h2>{props.title} </h2>
    <div className="expense-item__price">Rs. {props.amount}</div>
</div>
{/* <ExpenseDetails amount={props.amount} 
title={props.title} />  */}
</Card>


);
}
// we need to export thz function otherwise its only 
//usable inside of file & thats not helpful us
export default ExpenseItem;