import React from "react";

import { PasswordUpdateProvider } from "./password_update_context";

import { PasswordUpdateContent } from "./password_update_content";

const PasswordUpdatePage = () => {
	return (
		<PasswordUpdateProvider>
			<PasswordUpdateContent />
		</PasswordUpdateProvider>
	);
};

export default PasswordUpdatePage; 