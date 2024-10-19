import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import CustomMarker from '../components/CustomMarker/CustomMarker'

const position: LatLngExpression = [50.06465, 19.94498]

export default function MaindfdfComponent() {
	const [mapType, setMapType] = useState<'basic' | 'detailed' | 'topo'>('basic')
	const [policePosition, setPolicePosition] = useState<LatLngExpression>([50.06465, 19.94498])
	const [fireTruckPosition, setFireTruckPosition] = useState<LatLngExpression>([50.06665, 19.94298])

	const toggleMapType = () => {
		setMapType(prevType => {
			switch (prevType) {
				case 'basic':
					return 'detailed'
				case 'detailed':
					return 'topo'
				case 'topo':
					return 'basic'
				default:
					return 'basic'
			}
		})
	}

	const mapLayers = {
		basic: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		detailed: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
		topo: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
	}

	const attribution = {
		basic: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		detailed:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://hot.openstreetmap.org/">Humanitarian OpenStreetMap Team</a>',
		topo: '&copy; <a href="https://www.opentopomap.org/copyright">OpenTopoMap</a> contributors',
	}

	return (
		<div>
			<button
				onClick={toggleMapType}
				style={{ position: 'absolute', right: 0, zIndex: 1000, padding: '10px', backgroundColor: 'white' }}>
				Przełącz mapę
			</button>

			<MapContainer center={position} zoom={17} style={{ height: '100vh', width: '100%' }}>
				<TileLayer url={mapLayers[mapType]} attribution={attribution[mapType]} />

				<CustomMarker
					position={policePosition}
					iconUrl='https://cdn-icons-png.flaticon.com/512/3448/3448583.png'
					label='Radiowóz'
					draggable={true}
					onDragEnd={newPos => setPolicePosition(newPos)}
				/>

				<CustomMarker
					position={fireTruckPosition}
					iconUrl='https://cdn3.iconfinder.com/data/icons/maps-and-navigation-flat-icons-vol-2/256/75-512.png'
					label='Straż pożarna'
					draggable={true}
					onDragEnd={newPos => setFireTruckPosition(newPos)}
				/>
			</MapContainer>
		</div>
	)
}
