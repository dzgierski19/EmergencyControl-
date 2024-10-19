import { useLocation } from 'react-router-dom'

export function Breadcrumbs() {
	const { pathname } = useLocation()
	const lastPathSegment = pathname.split('/').pop()

	return (
		<div className='flex items-center text-[#8A99AF]'>
			<h1 className='text-4xl capitalize leading-2 text-black'>{lastPathSegment || 'Brak'}</h1>
		</div>
	)
}
