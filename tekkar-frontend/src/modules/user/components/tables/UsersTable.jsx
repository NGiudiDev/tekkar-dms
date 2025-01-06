import PropTypes from "prop-types";

import { useRouter } from "../../../common/hooks/useRouter";

import { 
	UserDocNumber,
	UserEmail,
	UserName,
} from "../";

import { Table } from "ds-loud-ng";

import { PATH } from "../../../common/constants/routes.consts";

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
			content: (user) => <UserName margin="y-10" user={user} />,
			label: "Nombre",
			width: "33%",
		},
		{
			content: (user) => <UserEmail margin="y-10" user={user} />,
			label: "Email",
			width: "33%",
		},
		{
			content: (user) => <UserDocNumber margin="y-10" user={user} />,
			label: "Documento",
			width: "33%",
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
