import { CarDetailProvider } from "./CarDetailContext";

import { CarDetailContent } from "./CarDetailContent";

const CarDetailPage = () => {
	return (
		<CarDetailProvider>
			<CarDetailContent />
		</CarDetailProvider>
	);
};

export default CarDetailPage;