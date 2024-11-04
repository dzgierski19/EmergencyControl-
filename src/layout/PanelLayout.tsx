import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbard'
import { Footer } from '../components/Footer/Footer'
import { useEffect, useState } from 'react'

export default function PanelLayout() {
	const [isScreenUnsupported, setIsScreenUnsupported] = useState(false)

	useEffect(() => {
		const checkScreenWidth = () => {
			if (window.innerWidth < 1100) {
				setIsScreenUnsupported(true)
			} else {
				setIsScreenUnsupported(false)
			}
		}
		checkScreenWidth()

		window.addEventListener('resize', checkScreenWidth)
		return () => window.removeEventListener('resize', checkScreenWidth)
	}, [])

	return (
		<main className="flex">
			{isScreenUnsupported ? (
				<div className="fixed inset-0 flex items-center justify-center bg-red-600 text-white text-2xl z-20 p-4">
					Nieobsługiwana rozdzielczość ekranu.
				</div>
			) : (
				<>
					<div className="flex-1 min-h-screen bg-gray-900 z-0">
						<Sidebar />
					</div>
					<div className="flex flex-col flex-3 w-full z-0">
						<Navbar />
						<Outlet />
						<Footer />
					</div>
				</>
			)}
		</main>
	)
}
