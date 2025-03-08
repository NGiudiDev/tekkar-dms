import React from "react";

import { PasswordRecoveryProvider } from "./password_recovery_context";

import { PasswordRecoveryContent } from "./password_recovery_content";

const PasswordRecoveryPage = () => {
	return (
		<PasswordRecoveryProvider>
			<PasswordRecoveryContent />
		</PasswordRecoveryProvider>
	);
};

export default PasswordRecoveryPage;