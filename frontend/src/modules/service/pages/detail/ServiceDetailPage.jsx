import { ServiceDetailProvider } from "./ServiceDetailContext";

import { ServiceDetailContent } from "./ServiceDetailContent";

const ServiceDetailPage = () => {
	return (
		<ServiceDetailProvider>
			<ServiceDetailContent />
		</ServiceDetailProvider>
	);
};

export default ServiceDetailPage;