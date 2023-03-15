import './Expenseitem.css';


function ExpenseItem(props){
//now we acces the the outside of data
    return <div className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
            <div className='expense-item__price'>{props.location}</div>
            </div>
    </div>
}
// we need to export thz function otherwise its only 
//usable inside of file & thats not helpful us
export default ExpenseItem;