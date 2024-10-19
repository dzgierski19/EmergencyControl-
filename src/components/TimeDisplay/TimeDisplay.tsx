import { Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

export function TimeDisplay() {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	const daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
	const currentDay = daysOfWeek[time.getDay()]

	return (
		<div className='flex items-center ml-16 leading-5'>
			<Clock className='w-6 h-6' />
			<span className='ml-2 mr-5'>{time.toLocaleTimeString()}</span>
			<span>{currentDay}</span>
		</div>
	)
}
