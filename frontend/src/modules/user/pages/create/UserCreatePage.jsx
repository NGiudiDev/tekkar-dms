import { UserCreateProvider } from "./UserCreateContext";

import { UserCreateContent } from "./UserCreateContent";

const UserCreatePage = () => {
	return (
		<UserCreateProvider>
			<UserCreateContent />
		</UserCreateProvider>
	);
};

export default UserCreatePage;