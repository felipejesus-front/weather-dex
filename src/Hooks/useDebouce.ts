import { useEffect, useState } from "react";

function useDebounce(value: string, delay: number) {
	const [deboucedValue, setDeboucedValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDeboucedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return deboucedValue;
}

export default useDebounce;
