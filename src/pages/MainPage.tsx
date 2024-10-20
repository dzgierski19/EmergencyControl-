import { InputSearch } from '../components/InputSearch/InputSearch'
import { MapsContainer } from '../components/MapsContainer/MapsContainer'

export default function MainPage() {
	return (
		<section className="flex h-full">
			<aside className="p-4 w-full max-w-[300px] border-r border-slate-500">
				<InputSearch />
				<p>jakś zdarzenie</p>
			</aside>

			<MapsContainer />

			<aside className="p-4 w-full max-w-[300px] border-l border-slate-500">
				<InputSearch />

				<p>jakś jednostka</p>
			</aside>
		</section>
	)
}
