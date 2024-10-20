export type MapLayer = 'basic' | 'detailed' | 'topo'

export const mapLayers: Record<MapLayer, string> = {
	basic: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	detailed: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
	topo: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
}

export const attribution: Record<MapLayer, string> = {
	basic: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	detailed:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://hot.openstreetmap.org/">Humanitarian OpenStreetMap Team</a>',
	topo: '&copy; <a href="https://www.opentopomap.org/copyright">OpenTopoMap</a> contributors',
}
