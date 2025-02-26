import React from "react";

import { ServiceReportDetailProvider } from "./ServiceReportDetailContext";

import { ServiceReportDetailContent } from "./ServiceReportDetailContent";

const ServiceReportDetailPage = () => {
	return (
		<ServiceReportDetailProvider>
			<ServiceReportDetailContent />
		</ServiceReportDetailProvider>
	);
};

export default ServiceReportDetailPage;