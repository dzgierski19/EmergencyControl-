import { useLocation } from 'react-router-dom'
import { pathTranslations } from '../../constants/categories'

export function Breadcrumbs() {
	const { pathname } = useLocation()
	const lastPathSegment = pathname.split('/').pop()

	return (
		<div className="flex items-center w-[160px] text-[#8A99AF]">
			<h1 className="text-xl capitalize  text-black">{pathTranslations[lastPathSegment || 'brak']}</h1>
		</div>
	)
}
