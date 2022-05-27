import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022')
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})
	// let expenseContent = <p style={{ textAlign: 'center' , color:"white"}}>no expense Found</p>
	// if (filteredExpenses.length > 0) {
	// 	expenseContent = filteredExpenses.map((el) => (
	// 		<ExpenseItem
	// 			key={el.id}
	// 			date={el.date}
	// 			text={el.title}
	// 			price={el.amount}
	// 		/>
	// 	))
	// }
	return (
		<Card className='expenses'>
			<ExpensesFilter
				filteredYear={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses}/>
			{/* {expenseContent} */}
            <ExpensesList expenses={filteredExpenses}/>
			{/* {filteredExpenses.length === 0 ? (
				<p>no expense Found.</p>
			) : (
				filteredExpenses.map((el) => {
					return (
						<ExpenseItem
							key={el.id}
							date={el.date}
							text={el.title}
							price={el.amount}
						/>
					)
				})
			)} */}
		</Card>
	)
}

export default Expenses
