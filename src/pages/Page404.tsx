import { Link } from 'react-router-dom'
import '../styles/Page404.css'

export default function Page404() {
	return (
		<main className="flex flex-col p-4 justify-center items-center min-h-screen  font-sans">
			<div>
				<h1 className="font-bold text-9xl lg:text-[12rem]">404</h1>
			</div>

			<div className="traffic-cone"></div>

			<div className="trapezoid"></div>

			<div className="text-center mt-6">
				<h2 className="text-3xl lg:text-5xl font-bold">UPS!</h2>
				<h3 className="text-xl lg:text-2xl mt-1">Strona nie została znaleziona</h3>
				<p className="text-lg mt-2">Przepraszamy, strona, której szukasz, nie istnieje.</p>

				<Link
					to="/panel"
					className="mt-5 block text-xl text-white bg-blue-600 hover:bg-blue-800 transition-colors duration-300 rounded-lg py-2 px-4 shadow-lg hover:shadow-xl"
				>
					Powrót na stronę
				</Link>
			</div>
		</main>
	)
}
