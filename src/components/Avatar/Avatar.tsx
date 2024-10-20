import { CircleUser } from 'lucide-react'

export function Avatar() {
	return (
		<div className='flex items-center gap-2'>
			<CircleUser className='text-slate-500' />
			<p className='text-xl'>Kordynator: Jan Kowalski</p>
		</div>
	)
}
