import CitySelect from "./CitySelect/CitySelect";
import Logo from "/logo.svg";

function Home() {
	return (
		<main>
			<div className="min-h-[70vh] flex flex-col place-content-center items-center gap-10">
				<div className="max-w-80 flex self-center md:px-2">
					<img src={Logo} alt="Logo WheaterDex " />
				</div>
				<CitySelect />
			</div>
		</main>
	);
}

export default Home;
