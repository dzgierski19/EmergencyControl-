import { Marker, Popup } from 'react-leaflet'
import L, { LatLngExpression } from 'leaflet'

interface CustomMarkerProps {
	position: LatLngExpression
	iconUrl: string
	label: string
	draggable: boolean
	onDragEnd: (newPosition: LatLngExpression) => void
	iconSize?: [number, number]
}

export default function CustomMarker({
	position,
	iconUrl,
	label,
	draggable,
	onDragEnd,
	iconSize = [62, 62],
}: CustomMarkerProps) {
	
	const customIcon = new L.Icon({
		iconUrl: iconUrl,
		iconSize: iconSize,
		iconAnchor: [iconSize[0] / 2, iconSize[1]], 
		popupAnchor: [0, -iconSize[1]], 
	})

	const handleDragEnd = (e: L.DragEndEvent) => {
		const newPos = e.target.getLatLng()
		onDragEnd([newPos.lat, newPos.lng])
	}

	return (
		<Marker
			position={position}
			icon={customIcon}
			draggable={draggable}
			eventHandlers={{
				dragend: handleDragEnd,
			}}>
			<Popup>{label}</Popup>
		</Marker>
	)
}
