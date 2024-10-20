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
		<div className='flex items-center ml-16 text-2xl'>
			<Clock className='w-6 h-6 transform translate-y-[1px]' />
			<span className='ml-1 mr-4'>{time.toLocaleTimeString()}</span>
			<span className='text-xl'>{currentDay}</span>
		</div>
	)
}
