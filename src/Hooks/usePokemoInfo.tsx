import { useState, useEffect } from "react";

export type WeatherConditions =
	| "Thunderstorm"
	| "Drizzle"
	| "Rain"
	| "Snow"
	| "Mist"
	| "Smoke"
	| "Haze"
	| "Dust"
	| "Fog"
	| "Sand"
	| "Ash"
	| "Squall"
	| "Tornado"
	| "Clear"
	| "Clouds";

type PokemonType =
	| "normal"
	| "fire"
	| "water"
	| "electric"
	| "grass"
	| "ice"
	| "fighting"
	| "poison"
	| "ground"
	| "flying"
	| "psychic"
	| "bug"
	| "rock"
	| "ghost"
	| "dragon"
	| "dark"
	| "steel"
	| "fairy";

function usePokemonInfo(climate: WeatherConditions, temperature: number) {
	const [pokemonType, setPokemonType] = useState<PokemonType | null>(null);
	const [pokemon, setPokemon] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		if (
			climate === "Rain" ||
			climate === "Drizzle" ||
			climate === "Thunderstorm"
		) {
			setPokemonType("electric");
		} else if (temperature < 5) {
			setPokemonType("ice");
		} else if (temperature >= 5 && temperature < 10) {
			setPokemonType("water");
		} else if (temperature >= 12 && temperature < 15) {
			setPokemonType("grass");
		} else if (temperature >= 15 && temperature < 21) {
			setPokemonType("ground");
		} else if (temperature >= 23 && temperature < 27) {
			setPokemonType("bug");
		} else if (temperature >= 27 && temperature <= 33) {
			setPokemonType("rock");
		} else if (temperature > 33) {
			setPokemonType("fire");
		} else {
			setPokemonType("normal");
		}
	}, [climate, temperature]);

	useEffect(() => {
		async function fetchPokemon() {
			try {
				setLoading(true);
				const response = await fetch(
					`https://pokeapi.co/api/v2/type/${pokemonType}`
				);
				const data = await response.json();
				const pokemonList = data?.pokemon?.filter(
					(pokemon: any) => pokemon.pokemon.url.split("/")[6] < 900
				);
				const randomIndex = Math.floor(
					Math.random() * pokemonList.length
				);
				const pokemonResponse = await fetch(
					pokemonList[randomIndex].pokemon.url
				);
				const pokemonData = await pokemonResponse.json();
				setPokemon(pokemonData);
				setLoading(false);
			} catch (error: any) {
				setError(error.message);
				setLoading(false);
			}
		}

		if (pokemonType != null) fetchPokemon();
	}, [pokemonType]);

	console.log(pokemonType);

	return { pokemon, loading, error, pokemonType };
}

export default usePokemonInfo;
