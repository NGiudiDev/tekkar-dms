import React from "react";

import { UserCreateProvider } from "./user_create_context";

import { UserCreateContent } from "./user_create_content";

const UserCreatePage = () => {
	return (
		<UserCreateProvider>
			<UserCreateContent />
		</UserCreateProvider>
	);
};

export default UserCreatePage;