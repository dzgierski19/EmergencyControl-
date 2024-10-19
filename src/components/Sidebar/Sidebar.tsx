import { Link } from 'react-router-dom'
import { sidebarItems } from '../../constants/categories'


export function Sidebar() {
	return (
		<aside className='py-12 min-h-screen border-r border-slate-500 bg-slate-200'>
			<ul>
				{sidebarItems.map((item) => (
					<li key={item.key} >
						<Link
							to={item.path}
							className='flex items-center mt-2 p-4 transition-colors duration-300 hover:bg-red-300'>
							<item.icon className='fill-black' />
						</Link>
					</li>
				))}
			</ul>
		</aside>
	)
}
