import React from "react";

import { ServiceReportDetailProvider } from "./service_report_detail_context";

import { ServiceReportDetailContent } from "./service_report_detail_content";

const ServiceReportDetailPage = () => {
	return (
		<ServiceReportDetailProvider>
			<ServiceReportDetailContent />
		</ServiceReportDetailProvider>
	);
};

export default ServiceReportDetailPage;