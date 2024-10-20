import { Map } from 'lucide-react'
import { MapLayer } from '../MapsContainer/helper'

interface MapModeSwitcherProps {
	currentMapType: MapLayer
	onMapTypeChange: (newType: MapLayer) => void
}

export function MapModeSwitcher({ currentMapType, onMapTypeChange }: MapModeSwitcherProps) {
	const toggleMapType = () => {
		switch (currentMapType) {
			case 'basic':
				onMapTypeChange('detailed')
				break
			case 'detailed':
				onMapTypeChange('topo')
				break
			case 'topo':
				onMapTypeChange('basic')
				break
			default:
				onMapTypeChange('basic')
		}
	}

	return (
		<button
			onClick={toggleMapType}
			className="flex items-center gap-1 absolute top-0 right-0 py-2 px-3 border-l border-slate-500 bg-blue-200 hover:bg-blue-300 cursor-pointer z-10"
		>
			<Map className="w-5 h-5" />
			Przełącz mapę
		</button>
	)
}
