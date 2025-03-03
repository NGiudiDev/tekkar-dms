import React from "react";

import { CarCreateProvider } from "./CarCreateContext";

import { CarCreateContent } from "./CarCreateContent";

const CarCreatePage = () => {
	return (
		<CarCreateProvider>
			<CarCreateContent />
		</CarCreateProvider>
	);
};

export default CarCreatePage;