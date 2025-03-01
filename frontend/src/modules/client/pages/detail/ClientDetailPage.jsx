import React from "react";

import { ClientDetailProvider } from "./ClientDetailContext";

import { ClientDetailContent } from "./ClientDetailContent";

const ClientDetailPage = () => {
	return (
		<ClientDetailProvider>
			<ClientDetailContent />
		</ClientDetailProvider>
	);
};

export default ClientDetailPage;