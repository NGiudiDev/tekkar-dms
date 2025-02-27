import React from "react";

import { LoginProvider } from "./LoginContext";

import { LoginContent } from "./LoginContent";

const CarCreatePage = () => {
	return (
		<LoginProvider>
			<LoginContent />
		</LoginProvider>
	);
};

export default CarCreatePage;