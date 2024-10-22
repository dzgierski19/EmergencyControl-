export default function LoginPage() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
			<div className="max-w-[400px] w-full py-16 px-12 bg-white shadow rounded-2xl">
				<h1 className="text-gray-800 text-center text-4xl font-bold">Logowanie</h1>

				<form className="mt-8 space-y-4">
					<div>
						<label className="text-gray-800 text-xl mb-2 block">Login</label>
						<div className="relative flex items-center">
							<input
								name="username"
								type="text"
								required
								className="w-full text-gray-800 text-xl border border-gray-300 px-3 py-2 rounded-md outline-blue-600"
							/>
						</div>
					</div>

					<div>
						<label className="text-gray-800 text-xl mb-2 block">Hasło</label>
						<div className="relative flex items-center">
							<input
								name="password"
								type="password"
								required
								className="w-full text-gray-800 text-xl border border-gray-300 px-3 py-2 rounded-md outline-blue-600"
							/>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-between gap-4">
						<a className="text-lg text-blue-600 hover:underline font-semibold">Forgot your password?</a>
					</div>

					<div className="!mt-8">
						<button
							type="button"
							className="w-full py-2 px-4 text-xl font-semibold tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
						>
							Zaloguj
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
