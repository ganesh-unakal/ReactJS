import React,{useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm=(props)=>{  //bcz 'props' acceses the  <ExpenseForm onSavingExpenseData={saveExpenseDataHandle} /> function data
  //this 'multi state approach' \|/
  const [enteredTitle, setEnteredTitle]=useState('')
  const [enteredAmount, setEnteredAmount]=useState('')
  const [enteredDate, setEnteredDate]=useState('')
 
  //understand how you can convert the multiple state into a single state.
  //by calling useState only once we can pass object as a value
 
  // const[userInput, setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enterdDate:''
  // })
  
 
  const titleChanegHandler=(event)=>{
    setEnteredTitle(event.target.value)

    //setUserInput({
                          //'spred oprater y means '

     /* If you would just set your new user input state
to this object, you would basically dump the Abra keys
because when you update your state
react will not merge this
with the old state.
It will simply replace
the old state with the new one.
And if your new one is a object
with one key value pair here
the old state will be replaced and therefore
The other are two key value pairs
for amounted to date would be lost.
So if you go for this
one state approach and you manage such a object
it's all your responsibility to make sure
that the other data does not get lost.
And to do that,
you manually need to
copy
the other values
which you're not updating here.
So if you are updating the title, you also want to copy
in the existing values for amount and date.
And one way
of doing this would be to use the spread operator
which is a default JavaScript operator
in modern JavaScript.
And you copy in user input
like this.
Actually, you do this first and then you just
override entered title.
If you haven't seen this syntax before,
this neon just
takes an object,
pulls out all the key value pairs,
and adds them to this new object.
And then we can still override key value pairs like
in this case enter title.
And by doing it like this,
we ensure that the other values
aren't thrown away,
but are always a part of that new state
And now we could do this
in all three places here,
of course,
and update the entered
Amount here and
do the same here,
Just that here, we update the entered date
and that would be an alternative
to having the three individual state slices.
It's up to you, what you prefer.*/

    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    //'preState' holds the old data object 
    // setUserInput((prevState)=>{
    //   return{...prevState, enteredTitle: event.target.value};
    // })
  }

  const amountChangeHandler=(event)=>{
    setEnteredAmount(event.target.value);
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  // })
    // setUserInput((prevState)=>{
    //   return{...prevState, enteredAmount: event.target.value};
    // })
    
  }


  const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdDate: event.target.value,
    // })

    // setUserInput((prevState)=>{
    //   return{...prevState, enteredTitle: event.target.value};
    // })
}

  const submitHandler=(event)=>{
    event.preventDefault();

    const expensedata={
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)// here we pass 'newDte' bcz which is pss date string & coverted into date object
    }
    props.onSavingExpenseData(expensedata); 

    //THIS for  website is that the input forms still hold onto the old value. so here we override nw 
    //we setting empty string to intial state
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('')
  }
    return( 
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>

             <div className='new-expense__control'>
             <label>Title</label>
                <input type='text'
                /*override & new value*/
                value={enteredTitle}
                 onChange={titleChanegHandler} />
             </div>

             <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number'
                 min='0.01' 
                 step='0.01'
                 /*overide*/
                 value={enteredAmount}
                  onChange={amountChangeHandler}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'
                  min='2019-01-01'
                  max='2022-12-31'
                  /*overide & new value*/
                  value={enteredDate}
                  onChange={dateChangeHandler} />
            </div>

           </div>

           <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
           </div>
        </form>
    )

}
export default ExpenseForm;    