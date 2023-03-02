import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import SearchResult from "./Components/SearchResult/SearchResult";
import "./styles/main.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:city" element={<SearchResult />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
