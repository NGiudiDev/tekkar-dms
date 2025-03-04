import React from "react";

import { ClientCreateProvider } from "./client_create_context";

import { ClientCreateContent } from "./client_create_content";

const ClientCreatePage = () => {
	return (
		<ClientCreateProvider>
			<ClientCreateContent />
		</ClientCreateProvider>
	);
};

export default ClientCreatePage;