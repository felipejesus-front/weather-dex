import { useCallback, useState } from "react";

interface FetchResponse {
	response: Response;
	json: any;
}

interface FetchError {
	message: string;
}

interface UseFetch {
	data: any;
	error: FetchError | null;
	loading: boolean;
	request: (
		url: string,
		options?: RequestInit
	) => Promise<FetchResponse | undefined>;
}

function useFetch(): UseFetch {
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<FetchError | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	let response: Response;
	const request = useCallback(async (url: string, options?: RequestInit) => {
		let json: any;

		try {
			setError(null);
			setLoading(true);

			response = await fetch(url, options);
			json = await response.json();

			if (response.ok === false) throw new Error(json.message);
		} catch (err: any) {
			json = null;

			setError({ message: err.message });
		} finally {
			setData(json);
			setLoading(false);

			return { response, json };
		}
	}, []);

	return { data, error, loading, request };
}

export default useFetch;
