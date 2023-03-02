import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "/searchIcon.svg";

function CitySelect() {
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();

	const goToSearch = useCallback(() => {
		if (inputValue.trim().length > 0) {
			navigate(`/${inputValue.trim()}`);
		}
	}, [inputValue, navigate]);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			goToSearch();
		}
	};

	return (
		<div className="w-[800px] relative lg:w-[90%] group">
			<button
				onClick={goToSearch}
				className="absolute right-0 p-5 rounded-tr-full rounded-br-full group-focus-within:scale-125 transition duration-300
				md:p-[10px]"
			>
				<img src={SearchIcon} alt="Pesquisar" />
			</button>
			<input
				type="text"
				placeholder="Type a city name to catch a Pokémon"
				className="w-full h-[60px] rounded-full pl-8 pr-14
				text-3xl leading-9 font-extralight text-neutral-50 bg-neutral-600
				md:pr-10 md:h-10 md:text-base md:leading-4 md:font-normal
				xs:text-xs xs:leading-4 xs:font-normal  transition-all duration-300"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
}

export default CitySelect;
