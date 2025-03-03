import React from "react";

import { ServiceDetailProvider } from "./service_detail_context";

import { ServiceDetailContent } from "./service_detail_content";

const ServiceDetailPage = () => {
	return (
		<ServiceDetailProvider>
			<ServiceDetailContent />
		</ServiceDetailProvider>
	);
};

export default ServiceDetailPage;