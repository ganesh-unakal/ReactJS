//line no 12 we shold write capital letter inside Because the simple rule which React applies
//is that lowercase elements are built in HTML elements.So it will look for them as built in elements.
//Whereas elements starting with an uppercase character are elements defined by you or some other developer.
//So this is a custom made Component and we have to use the name which we use here in the import

//'components' is a floder name & 'Expenseitem' is a function

//import ExpenseItem from "./components/Expenseitem";
import Expenses from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

const App = () => {
  //date objects
  const expenses = [
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
 
  const addExpenseHandler=expense=>{
    console.log('in App.js');
    console.log(expense)


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
