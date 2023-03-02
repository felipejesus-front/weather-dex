import { Link } from "react-router-dom";

interface ErrorComponentProps {
	error: string | null;
}

function ErrorComponent(Props: ErrorComponentProps) {
	return (
		<div className="mx-auto flex flex-col items-center">
			<img
				className="drop-shadow-2xl"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/79.png`}
				alt="Slowpoke"
			/>
			<p className="mt-10 text-4xl leading-10 font-normal text-neutral-50 text-center">
				Oops! We found an error: {Props.error}
			</p>

			<Link
				className=" bg-neutral-700 rounded-lg text-center px-8 py-4 mt-20 mb-20 text-2xl leading-7 font-medium text-neutral-50 hover:scale-105 transition-all duration-300 drop-shadow-2xl hover:text-orange-500"
				to="/"
			>
				Try another city!
			</Link>
		</div>
	);
}

export default ErrorComponent;
