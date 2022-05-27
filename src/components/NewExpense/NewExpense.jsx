import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {
	const AddData = (data)=>{
      const objectWithId ={
		  ...data,
			id: Math.random().toString(),
		  
	  }
	  props.onAddDataToArray(objectWithId)
	  props.deletHand(objectWithId)
	}
	return (
		<div className='new-expense'>
			<ExpenseForm filterArray={props.filterArray} onAddData={AddData}/>
		</div>
	)
}

export default NewExpense
