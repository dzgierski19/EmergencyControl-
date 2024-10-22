import { useEffect, useState } from 'react'
import './RoadAdnimation.css'

export function RoadAnimation() {
	const [isScreenUnsupported, setIsScreenUnsupported] = useState(false)

	useEffect(() => {
		const checkScreenWidth = () => {
			if (window.innerWidth > 1300) {
				setIsScreenUnsupported(true)
			} else {
				setIsScreenUnsupported(false)
			}
		}
		checkScreenWidth()

		window.addEventListener('resize', checkScreenWidth)
		return () => window.removeEventListener('resize', checkScreenWidth)
	}, [])

	if (!isScreenUnsupported) {
		return null
	}

	return (
		<div className="road">
			<div className="police">
				<div className="light_beam"></div>
				<div className="side_mirror"></div>
				<h5>POLICE</h5>
				<h4>POLICE</h4>
				<span>
					<b></b>
					<i></i>
				</span>
			</div>
			<div className="police">
				<div className="light_beam"></div>
				<div className="side_mirror"></div>
				<h5>POLICE</h5>
				<h4>POLICE</h4>
				<span>
					<b></b>
					<i></i>
				</span>
			</div>
			<div className="taxi">
				<div className="taxi_light_beam"></div>
				<div className="taxi_side_mirror"></div>
				<span>
					<b></b>
					<i></i>
				</span>
			</div>
		</div>
	)
}
