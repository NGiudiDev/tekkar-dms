import React from "react";

import { LoginProvider } from "./login_context";

import { LoginContent } from "./login_content";

const CarCreatePage = () => {
	return (
		<LoginProvider>
			<LoginContent />
		</LoginProvider>
	);
};

export default CarCreatePage;