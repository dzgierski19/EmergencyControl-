export function PasswordInput() {
	return (
		<div>
			<label htmlFor="password" className="font-semibold text-xl mb-2 block mt-3">Hasło</label>
			<div className="relative flex items-center">
				<input
					id="password"
					type="password"
					required
					className="w-full text-xl border border-gray-300 px-3 py-2 rounded-md outline-blue-600"
					autoComplete="off"
				/>
			</div>
		</div>
	)
}
