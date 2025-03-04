import React from "react";

import { CarDetailProvider } from "./car_detail_context";

import { CarDetailContent } from "./car_detail_content";

const CarDetailPage = () => {
	return (
		<CarDetailProvider>
			<CarDetailContent />
		</CarDetailProvider>
	);
};

export default CarDetailPage;