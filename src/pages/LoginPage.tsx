import { FullWidtButton } from '../components/FullWidtButton/FullWidtButton'
import { LoginInput } from '../components/LoginInput/LoginInput'
import { PasswordInput } from '../components/PasswordInput/PasswordInput'
import { RoadAnimation } from '../components/RoadAnimation/RoadAnimation'

export default function LoginPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 bg-slate-500 w-screen overflow-hidden">
			<div className="max-w-[400px] w-full py-6 px-6 bg-white bg-opacity-65 shadow border border-white rounded-2xl relative z-20">
				<h1 className="text-gray-800 text-center text-4xl font-bold">Logowanie</h1>

				<form className="mt-4">
					<LoginInput />

					<PasswordInput />

					<div className="mt-3">
						<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
							<a className="text-lg text-blue-700 hover:underline font-semibold">Forgot your password?</a>
						</div>

						<FullWidtButton>Zaloguj się</FullWidtButton>
					</div>
				</form>
			</div>

			<RoadAnimation />
		</div>
	)
}
