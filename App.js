
//line no 12 we shold write capital letter inside Because the simple rule which React applies
//is that lowercase elements are built in HTML elements.So it will look for them as built in elements.
//Whereas elements starting with an uppercase character are elements defined by you or some other developer.
//So this is a custom made Component and we have to use the name which we use here in the import

//'components' is a floder name & 'Expenseitem' is a function 
import ExpenseItem from "./components/Expenseitem";

function App() {
//date objects
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:'andra'
    },
    { id: 'e2',
     title: 'New TV', 
     amount: 799.49,
      date: new Date(2021, 2, 12) , 
      location:'chennail'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:'hubli'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:"bnglore"
    },
    {
      id: 'e5',
      title: 'location',
      amount: 45,
      date: new Date(2023, 2, 15),
      location: 'dehli'
    },
  ];
//line 37 after the .(dot)we can acces the property
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}
        location={expenses[0].location}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}
        location={expenses[1].location}>
     </ExpenseItem>
      <ExpenseItem
         title={expenses[2].title} 
         amount={expenses[2].amount} 
         date={expenses[2].date}
         location={expenses[2].location}>
      </ExpenseItem>
      <ExpenseItem
         title={expenses[3].title} 
         amount={expenses[3].amount} 
         date={expenses[3].date}
         location={expenses[3].location}>
      </ExpenseItem>
      <ExpenseItem
         title={expenses[4].title} 
         amount={expenses[4].amount} 
         date={expenses[4].date}
         location={expenses[4].location}>
      </ExpenseItem>
    </div>
  );
}

export default App;
