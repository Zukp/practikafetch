import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
const ExpensesList = (props) => {
   
   if(props.expenses.length ===0){
       return <h2 className='expenses-list'>No expense Found.</h2>
   }
   return <ul className='expenses-list__fallback'>
     
      {props.expenses.map((el)=>(
      
  
           <ExpenseItem
          
           key={el.id}
           date={el.date}
           text={el.title}
           price={el.amount}
       />
   
       ))}
   </ul>
};

export default ExpensesList;