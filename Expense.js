import React,{useState} from "react";
import Expenseitem from "./Expenseitem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpensesFilter";
//import Expense from './Expense'


const Expenses=(props)=> {
  const [filteredYear, setFilteredYear]=useState("2020")

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }


  return (
    <Card className="expenses">
       
       <ExpenseFilter selected = {filteredYear} 
       onChangeFilter = {filterChangeHandler}>
     
      <Expenseitem  
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].location}
      />
      <Expenseitem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].location}
      />
      <Expenseitem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].location}
      />
      <Expenseitem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location={props.items[3].location}
      />
      </ExpenseFilter>
    </Card>
  );
}

export default Expenses;