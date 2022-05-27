import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
const ExpenseItem = (props) => {
console.log(props)
	return (
		<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{props.text}</h2>
					<div className='expense-item__price'>{props.price}</div>
					<button>delet</button>
				</div>
		</Card>
	)
}

export default ExpenseItem
