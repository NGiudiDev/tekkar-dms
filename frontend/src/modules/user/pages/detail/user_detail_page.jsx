import React from "react";

import { UserDetailProvider } from "./user_detail_context";

import { UserDetailContent } from "./user_detail_content";

const UserDetailPage = () => {
	return (
		<UserDetailProvider>
			<UserDetailContent />
		</UserDetailProvider>
	);
};

export default UserDetailPage;