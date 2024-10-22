export function LoginInput() {
	return (
		<div>
			<label id="login" className="font-semibold text-xl mb-2 block">
				Login
			</label>
			<div className="relative flex items-center">
				<input
					id="login"
					type="text"
					required
					className="w-full text-xl border border-gray-300 px-3 py-2 rounded-md outline-blue-600"
					autoComplete="login"
				/>
			</div>
		</div>
	)
}
