import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../../api/weatherApi";
import useFetch from "../../Hooks/useFetch";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import PokemonCard from "../PokemonCard/PokemonCard";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

function SearchResult() {
	const { city } = useParams();
	const { data, error, loading, request } = useFetch();

	useEffect(() => {
		request(
			`${WEATHER_API_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
		);

		console.log(error);
	}, []);

	if (error) return <ErrorComponent error={error.message} />;
	if (loading) return <LoadingComponent />;

	if (data)
		return (
			<main className="max-w-[1200px] mx-auto flex flex-col items-center">
				<WeatherDisplay
					cityName={data.name}
					temperature={data.main.temp}
					icon={data.weather[0].icon}
					mainWheater={data.weather[0].main}
				/>

				<PokemonCard
					temperature={Math.round(data.main.temp)}
					mainWheater={data.weather[0].main}
				/>
				<Link
					className=" bg-neutral-700 rounded-lg text-center px-8 py-4 mb-20 text-2xl leading-7 font-medium text-neutral-50 hover:scale-105 hover:text-orange-500 transition-all duration-300 drop-shadow-2xl"
					to="/"
				>
					Catch another pokemon!
				</Link>
			</main>
		);
	else return null;
}

export default SearchResult;
