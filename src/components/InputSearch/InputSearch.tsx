import { Search } from 'lucide-react'

export function InputSearch() {
	return (
		<div className="flex w-full">
			<input
				type="text"
				placeholder="Przeszukaj..."
				id="searchQuery"
				className="px-3 text-md w-full border border-slate-400 rounded-l-md focus:outline-none"
			/>
			<button
				type="button"
				className="ml-2 py-2 px-3 bg-gray-300 text-lg bg-slate-500 border-l-0 rounded-r-md cursor-pointer hover:bg-slate-400"
			>
				<Search className="text-white" />
			</button>
		</div>
	)
}
