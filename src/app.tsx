export const App = () => {
	return (
		<div className="mx-20">
			<header className="flex items-center h-[7rem] font-inconsolata uppercase text-2xl">
				404 not found
			</header>
			<main className="flex justify-center items-center gap-20 h-[calc(100vh-10rem)]">
				<img
					src="./scarecrow.png"
					alt="Scare crow"
					className="w-[540px] h-[447px]"
				/>
				<div className="flex flex-col items-start gap-5">
					<h1 className="font-bold text-6xl">I have bad news for you</h1>
					<p className="text-2xl w-96">
						The page you are looking for might be removed or is temporarily
						unavailable
					</p>
					<button className="uppercase bg-gray-800 text-white px-5 py-4">
						back to homepage
					</button>
				</div>
			</main>
		</div>
	);
};
