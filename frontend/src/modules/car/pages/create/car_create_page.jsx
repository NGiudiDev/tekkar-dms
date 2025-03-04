import React from "react";

import { CarCreateProvider } from "./car_create_context";

import { CarCreateContent } from "./car_create_content";

const CarCreatePage = () => {
	return (
		<CarCreateProvider>
			<CarCreateContent />
		</CarCreateProvider>
	);
};

export default CarCreatePage;