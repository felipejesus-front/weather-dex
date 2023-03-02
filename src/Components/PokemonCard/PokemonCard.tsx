import usePokemonInfo, { WeatherConditions } from "../../Hooks/usePokemoInfo";

interface PokemonCardProps {
	temperature: number;
	mainWheater: WeatherConditions;
}

const colorVariants: any = {
	ice: "text-ice",
	water: "text-water",
	grass: "text-grass",
	ground: "text-ground",
	bug: "text-bug",
	rock: "text-rock",
	fire: "text-fire",
	normal: "text-normal",
	electric: "text-electric",
};

const gradientColorVariants: any = {
	ice: "bg-gradient-to-b from-ice to-dark-ice",
	water: "bg-gradient-to-b from-water to-dark-water",
	grass: "bg-gradient-to-b from-grass to-dark-grass",
	ground: "bg-gradient-to-b from-ground to-dark-ground",
	bug: "bg-gradient-to-b from-bug to-dark-bug",
	rock: "bg-gradient-to-b from-rock to-dark-rock",
	fire: "bg-gradient-to-b from-fire to-dark-fire",
	normal: "bg-gradient-to-b from-normal to-dark-normal",
	electric: "bg-gradient-to-b from-electric to-dark-electric",
};

const shadowColors: any = {
	ice: "drop-shadow-ice",
	water: "drop-shadow-water",
	grass: "drop-shadow-grass",
	ground: "drop-shadow-ground",
	bug: "drop-shadow-bug",
	rock: "drop-shadow-rock",
	fire: "drop-shadow-fire",
	normal: "drop-shadow-normal",
	electric: "drop-shadow-electric",
};

function PokemonCard({ temperature, mainWheater }: PokemonCardProps) {
	const { pokemon, loading, error, pokemonType } = usePokemonInfo(
		mainWheater,
		temperature
	);

	if (loading || error) return <PokemonCardSkeleton />;
	if (pokemon && pokemonType)
		return (
			<>
				<p
					className={`mt-10 text-4xl leading-10 font-normal text-neutral-50 text-center `}
				>
					You've got a
					<span className={`font-bold ${colorVariants[pokemonType]}`}>
						{" "}
						{pokemonType}{" "}
					</span>
					pokemon!
				</p>

				<div
					className={` bg-neutral-50 my-20 rounded-lg ${shadowColors[pokemonType]} animate-[showUp_.5s_ease] transition-all duration-300 group hover:scale-105 `}
				>
					<div
						className={` ${gradientColorVariants[pokemonType]} relative rounded-tr-lg rounded-tl-lg`}
					>
						<img
							className="max-w-[350px] xs:max-w-[300px] mx-auto transition-all duration-500 group-hover:scale-125"
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
							alt={pokemon.name}
						/>
					</div>
					<img
						className="absolute w-20 right-5 top-5"
						src={`../../src/Assets/type-icons/${pokemonType}.svg`}
						alt={pokemonType}
					/>

					<div className="flex justify-center items-center gap-2 mt-5 ">
						<p className="text-5xl leading-none font-medium text-neutral-900 xs:text-3xl transition-all duration-300 capitalize">
							{pokemon.name}
						</p>
						<span className="text-xl leading-7 font-normal text-neutral-600 xs:text-lg transition-all duration-300">
							nº {pokemon.id}
						</span>
					</div>

					<div className=" text-center mt-5 text-xl leading-7 font-medium text-neutral-700 mb-5 xs:text-base transition-all duration-300">
						<p>HP: {pokemon.stats[0].base_stat}</p>
						<p>Attack: {pokemon.stats[1].base_stat}</p>
						<p>Defense: {pokemon.stats[2].base_stat}</p>
					</div>
				</div>
			</>
		);
	else return null;
}

export default PokemonCard;

function PokemonCardSkeleton() {
	return (
		<div className="animate-pulse">
			<div className="mt-10 h-10 w-[400px] bg-neutral-600 rounded-md"></div>
			<div className=" mt-20 h-[540px] w-[350x] bg-neutral-600 rounded-md"></div>
		</div>
	);
}
