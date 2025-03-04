import React from "react";

import { ServiceCreateProvider } from "./service_create_context";

import { ServiceCreateContent } from "./service_create_content";

const ServiceCreatePage = () => {
	return (
		<ServiceCreateProvider>
			<ServiceCreateContent />
		</ServiceCreateProvider>
	);
};

export default ServiceCreatePage;