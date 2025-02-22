import PropTypes from "prop-types";

import { useRouter } from "../../../common/hooks/useRouter";

import { 
	PersonDocNumber,
	PersonEmail,
	PersonImage,
	PersonName,
} from "../../../person/components";

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
					<PersonImage person={user.person} />
					<PersonName margin="l-8 y-10" person={user.person} />
				</Flex>	
			),
			label: "Nombre",
			width: "35%",
		},
		{
			content: (user) => <PersonEmail margin="y-10" person={user.person} />,
			label: "Email",
			width: "40%",
		},
		{
			content: (user) => <PersonDocNumber margin="y-10" person={user.person} />,
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
