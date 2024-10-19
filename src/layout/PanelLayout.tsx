import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbard'
import { Footer } from '../components/Footer/Footer'

export default function PanelLayout() {
	return (
		<main className='flex'>
			<div className='flex-1 min-h-screen bg-gray-900'>
				<Sidebar />
			</div>
			<div className='flex flex-col flex-3 w-full'>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</main>
	)
}
