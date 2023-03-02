import React from "react";

import Loading from "../../Assets/Loading.svg";

function LoadingComponent() {
	return (
		<div className="max-w-[1200px] mx-auto mt-40 flex flex-col items-center">
			<div className="animate-spin">
				<img className="animate-pulse" src={Loading} alt="" />
			</div>
		</div>
	);
}

export default LoadingComponent;
