import { FilePenLine, ScanSearch } from 'lucide-react'

interface TitledLayerProps {
	children: React.ReactNode
	editTitle?: boolean
}

export function TitledLayer({ children, editTitle }: TitledLayerProps) {
	return (
		<section className='flex justify-center mt-4 p-6 lg:px-12 lg:mt-10'>

			<div className='p-4 w-full max-w-[1100px] rounded-lg bg-white shadow-lg border border-[#E2E8F0] lg:p-3 lg:pb-7 '>
				
				<div className='flex items-center  mb-6 text-[#8a99af] select-none'>
					{editTitle ? <FilePenLine className='w-8' /> : <ScanSearch className='w-8' />}
					<h3 className='text-[1.2rem] uppercase font-bold'>{editTitle ? 'Edycja' : 'Podgląd'}</h3>
				</div>

				<div className='flex justify-center'>{children}</div>
			</div>
		</section>
	)
}
