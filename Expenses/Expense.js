import React from "react";
import Expenseitem from "./Expenseitem";
import Card from "./Card";
import "./Expense.css";
//import Expense from './Expense'


function Expenses(props) {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;