import React from "react";

import { ServiceCreateProvider } from "./ServiceCreateContext";

import { ServiceCreateContent } from "./ServiceCreateContent";

const ServiceCreatePage = () => {
	return (
		<ServiceCreateProvider>
			<ServiceCreateContent />
		</ServiceCreateProvider>
	);
};

export default ServiceCreatePage;