import { LatLngExpression } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import CustomMarker from '../CustomMarker/CustomMarker'
import { attribution, MapLayer, mapLayers } from './helper'
import { MapModeSwitcher } from '../MapModeSwitcher/MapModeSwitcher'

const position: LatLngExpression = [50.06465, 19.94498]

export function MapsContainer() {
	const [mapType, setMapType] = useState<MapLayer>('basic')
	const [policePosition, setPolicePosition] = useState<LatLngExpression>([50.06465, 19.94498])
	const [fireTruckPosition, setFireTruckPosition] = useState<LatLngExpression>([50.06665, 19.94298])


	return (
		<div className='w-full relative'>
			<MapModeSwitcher currentMapType={mapType} onMapTypeChange={setMapType} />

			<MapContainer center={position} zoom={17} style={{ height: '100%', width: '100%', zIndex: 0 }}>
				<TileLayer url={mapLayers[mapType]} attribution={attribution[mapType]} />

				<CustomMarker
					position={policePosition}
					iconUrl="https://cdn-icons-png.flaticon.com/512/3448/3448583.png"
					label="Radiowóz"
					draggable={true}
					onDragEnd={newPos => setPolicePosition(newPos)}
				/>

				<CustomMarker
					position={fireTruckPosition}
					iconUrl="https://cdn3.iconfinder.com/data/icons/maps-and-navigation-flat-icons-vol-2/256/75-512.png"
					label="Straż pożarna"
					draggable={true}
					onDragEnd={newPos => setFireTruckPosition(newPos)}
				/>
			</MapContainer>
		</div>
	)
}
