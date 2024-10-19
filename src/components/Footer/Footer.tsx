export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<div className='absolute bottom-0 right-0 flex items-center justify-between mt-auto p-4 text-[#737e8f] text-2xl'>
			<div></div>
			<div>&copy; Prawa Zastrzeżone {currentYear}</div>
		</div>
	)
}
