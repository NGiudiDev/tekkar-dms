import React from "react";

import { ClientDetailProvider } from "./client_detail_context";

import { ClientDetailContent } from "./client_detail_content";

const ClientDetailPage = () => {
	return (
		<ClientDetailProvider>
			<ClientDetailContent />
		</ClientDetailProvider>
	);
};

export default ClientDetailPage;