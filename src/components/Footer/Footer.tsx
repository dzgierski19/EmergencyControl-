export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<div className='fixed bottom-[-6px] right-0 flex items-center justify-between mt-auto p-4 text-[#737e8f] text-md'>
			<div></div>
			<div>&copy; Prawa Zastrzeżone {currentYear}</div>
		</div>
	)
}
