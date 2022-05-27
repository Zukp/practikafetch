import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
const Chart = (props) => {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
	const totalMax = Math.max(...dataPointValues)
	return (
		<div className='chart'>
			{props.dataPoints.map((el) => (
			<ChartBar
					key={el.label}
					value={el.value}
					maxValue={totalMax}
					label={el.label}
				/>
			
		
			))}
		</div>
	)
}

export default Chart
