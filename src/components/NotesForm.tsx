export const NotesForm = () => {
	return (
		<form className="bg-slate-400 p-6 rounded-lg">

			<div className="mb-3">
				<label className="block mb-1" htmlFor="note">Note:</label>
				<textarea className="w-full" id="note"/>
			</div>

			<div className="mb-3">
				<label className="block mb-1" htmlFor="rank">Rank:</label>
				<input className="w-[4rem]" id="rank" type="text"/>
			</div>

			<div className="mb-3">
				<label className="block mb-1" htmlFor="app_pin">PIN:</label>
				<input className="w-[7rem]" type="password" id="app_pin"/>
			</div>

			<div className="mb-3 flex justify-end">
				<button type="button" className="bg-slate-800 px-2 py-1 rounded-sm text-slate-400">Save</button>
			</div>
		</form>
	)
}