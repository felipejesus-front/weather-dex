interface WeatherDisplayProps {
	cityName: string;
	temperature: number;
	icon: string;
	mainWheater: string;
}

function WeatherDisplay(Props: WeatherDisplayProps) {
	return (
		<div
			className="w-[800px] mt-10 rounded-[30px] flex flex-col items-center gap-2 py-16 bg-[url('../Assets/wheater-images/Cloudy-n2.jpg')] bg-center bg-cover relative
md:w-[90%] md:py-8 transition-all duration-300 animate-[showUp_.5s_ease]"
		>
			<div className="absolute w-full h-full top-0 rounded-[30px] bg-white bg-opacity-10 backdrop-blur-[x]"></div>
			<div className="z-10 flex flex-col items-center">
				<p className="text-5xl leading-none font-medium text-neutral-50 md:text-3xl delay-1000">
					{Props.cityName}
				</p>
				<p className="text-9xl leading-none font-light text-neutral-50 md:text-7xl delay-300">
					{Math.round(Props.temperature)}º
				</p>
				<div className="flex items-center mt-2 delay-100">
					<img
						className="max-w-[100px] md:max-w-[40px]"
						src={`http://openweathermap.org/img/wn/${Props.icon}@4x.png`}
						alt={Props.mainWheater}
					/>
					<span className="text-5xl leading-none font-medium text-neutral-50 md:text-3xl">
						{Props.mainWheater}
					</span>
				</div>
			</div>
		</div>
	);
}

export default WeatherDisplay;
