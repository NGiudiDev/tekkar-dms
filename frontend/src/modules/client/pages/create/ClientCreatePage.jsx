import React from "react";

import { ClientCreateProvider } from "./ClientCreateContext";

import { ClientCreateContent } from "./ClientCreateContent";

const ClientCreatePage = () => {
	return (
		<ClientCreateProvider>
			<ClientCreateContent />
		</ClientCreateProvider>
	);
};

export default ClientCreatePage;