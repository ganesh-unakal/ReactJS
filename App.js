
//import ExpenseItem from "./components/Expenseitem";
import Expenses from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";


const DUMMY_EXPENSES = [
   //date objects
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "andra",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "chennail",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "hubli",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "bnglore",
  }
];
 

const App = () => {
  const [expenses, setExpenses ]=useState(DUMMY_EXPENSES)
 
 
  const addExpenseHandler=expense=>{
    // console.log('in App.js');
    // console.log(expenses)

    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];  //we can add newexpenses in the so that we can add'expense' the we use. sprad operator on the existing data
    });
   



// var newArr = arr.map(expenses, i ) => {

// console.log(expenses + 'index' + i)

// return expenses + i

// }



  }
  // return React.createElement('div',{},
  //         React.createElement('h2', {},"lets get started"),
  //         React.createElement(Expenses,{items: expenses}));
  //line 37 after the .(dot)we can acces the property
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
      
     
    </div>
  );
};

export default App;
