import { UserDetailProvider } from "./UserDetailContext";

import { UserDetailContent } from "./UserDetailContent";

const UserDetailPage = () => {
	return (
		<UserDetailProvider>
			<UserDetailContent />
		</UserDetailProvider>
	);
};

export default UserDetailPage;