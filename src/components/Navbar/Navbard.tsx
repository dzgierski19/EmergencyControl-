import { LogOut } from 'lucide-react'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { TimeDisplay } from '../TimeDisplay/TimeDisplay'
import { Avatar } from '../Avatar/Avatar'

export default function Navbar() {
	return (
		<nav className='flex px-12 justify-between items-center sticky top-0 border-b border-slate-500 bg-slate-200 '>
			<div className='flex items-center gap-5 ml-6 py-4'>
				<Breadcrumbs />
				<TimeDisplay />
			</div>

			<div className='flex items-center gap-14'>
                <Avatar />
				<button>
					<LogOut />
				</button>
			</div>
		</nav>
	)
}
