export const App = () => {
	return (
		<div className="mx-10 md:mx-20">
			<header className="flex items-center h-[7rem] font-inconsolata uppercase text-2xl">
				404 not found
			</header>
			<main className="flex flex-wrap items-center gap-20 h-[calc(100vh-10rem)]">
				<div className="flex justify-center items-center w-full md:w-auto">
					<img
						src="./scarecrow.png"
						alt="Scare crow"
						className="w-[286px] h-[238px] md:w-[500px] md:h-[460px]"
					/>
				</div>
				<div className="flex flex-col items-start gap-5 md:w-[30vw]">
					<h1 className="font-bold text-5xl md:text-6xl md:w-[40vw]">
						I have bad news for you
					</h1>
					<p className="text-base md:text-2xl w-[95%]">
						The page you are looking for might be removed or is temporarily
						unavailable
					</p>
					<button className="uppercase bg-gray-800 text-white px-5 py-4 mb-10 md:mb-0">
						back to homepage
					</button>
				</div>
			</main>
		</div>
	);
};
