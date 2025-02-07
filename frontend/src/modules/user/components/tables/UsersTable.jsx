import PropTypes from "prop-types";

import { useRouter } from "../../../common/hooks/useRouter";

import { 
	UserDocNumber,
	UserEmail,
	UserName,
	UserProfileImage,
} from "../";

import { Table } from "ds-loud-ng";

import { PATH } from "../../../common/constants/routes.consts";
import { Flex } from "ds-loud-ng/dist/components/layout";

const DEFAULT_PROPS = {
	list: [],
};

export const UsersTable = (props) => {
	const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

	const router = useRouter();

	const columns = [
		{
			content: (user) => (
				<Flex>
					<UserProfileImage user={user} />
					<UserName margin="l-8 y-10" user={user} />
				</Flex>	
			),
			label: "Nombre",
			width: "35%",
		},
		{
			content: (user) => <UserEmail margin="y-10" user={user} />,
			label: "Email",
			width: "40%",
		},
		{
			content: (user) => <UserDocNumber margin="y-10" user={user} />,
			label: "Documento",
			width: "25%",
		},
	];

	const handleRowClick = (row) => {
		router.push(`${PATH.users}/${row.id}`);
	};

	return (
		<Table
			columns={columns}
			data={attrs.list}
			onClick={handleRowClick}
		/>
	);
};

UsersTable.propTypes = {
	list: PropTypes.array,
};
