// import logo from './logo.svg';
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import Modal from './components/Modal'
import { useCallback, useEffect, useState } from 'react'

const expenses = [
	{
		id: 'e1',
		title: 'Toilet paper',
		amount: '94.12',
		date: new Date('2020,3,28'),
	},
	{
		id: 'e2',
		title: 'New Tv',
		amount: '104.1',
		date: new Date('2020,3,28'),
	},
	{
		id: 'e3',
		title: 'Car Insuranse',
		amount: '73.2',
		date: new Date('2021,3,28'),
	},
	{
		id: 'e4',
		title: 'New Desk (wooden)',
		amount: '450',
		date: new Date('2022,4,16'),
	},
]
function App() {
	const [array , setArray] = useState(expenses)
	const [modal,setModal] = useState(false)
	const [error,setError] = useState(false)
	console.log(array)
  
	const fetchArray  =useCallback(async () =>{
		
		try {
			setModal(true)
		const res = await fetch('https://practica-add-fetch-default-rtdb.firebaseio.com/expenses.json')
		if(!res.ok){
			throw new Error('Серверден ошибка бар')
		}
		const result =await res.json();
		const done = []
		for(const i in result){
			done.push({
				title:result[i].title,
				amount:result[i].amount,
				date:new Date(result[i].date),
			})
		}
		setArray(done)
		setModal(false)
			
		} catch (error) {
			setError(error.message)
		}
	},[])
 
	useEffect(() => {
		fetchArray()
	},[fetchArray])

	const addDataToArray = async(objectWithId) => {
		
	const response = await fetch('https://practica-add-fetch-default-rtdb.firebaseio.com/expenses.json',{
		method:"POST",
		headers:{
			"Content-Type":"appalication/json"
		},
		body:JSON.stringify(objectWithId)
	})
	const res = await response.json()
	fetchArray()
	}
	return (
		<div className='App'>
			<NewExpense onAddDataToArray={addDataToArray} />
             {modal && <Modal error={error} />}
			 <h1>{error}</h1>
			<Expenses expenses={array} />
		</div>
	)
}

export default App
