import { Car, House, LucideIcon, User } from 'lucide-react'

interface SidebarItem {
	icon: LucideIcon
	path: string
	key: number
}

export const sidebarItems: SidebarItem[] = [
	{ icon: House, path: '/panel', key: 1 },
	{ icon: User, path: '/panel/coordinators', key: 2 },
	{ icon: Car, path: '/panel/units', key: 3 },
]

export const pathTranslations: { [key: string]: string } = {
	panel: 'panel',
	coordinators: 'Koordynatorzy',
	units: 'Jednostki',
	['new-coordinators']: 'Nowy kordynator',
	// settings: 'Ustawienia',
	// profile: 'Profil',
	brak : 'Brak',
}
