import React from 'react';
import './ExpenseDate.css'
const ExpenseDate = (props) => {
    console.log(props);
    const month = props.date.toLocaleString('en-Us', { month: 'long'});
    const day = props.date.toLocaleString('en-Us', {day: '2-digit' });
    const year = props.date.getFullYear()
   
    
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month }</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year ===2021? '1 год назад' : year  ===2020? '2 год назад' : year}</div>
        </div>
    );
};

export default ExpenseDate;