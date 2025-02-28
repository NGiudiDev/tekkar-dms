import React from "react";
import PropTypes from "prop-types";

import { useRouter } from "@hooks";

import { 
	PersonDocNumberCol,
	PersonEmailCol,
	PersonImageCol,
	PersonNameCol,
} from "@person/components";

import { Flex, Table } from "ds-loud-ng";

import { PATH } from "@router/constants/routes.consts";

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
					<PersonImageCol person={user.person} />
					<PersonNameCol margin="l-8 y-10" person={user.person} />
				</Flex>	
			),
			label: "Nombre",
			width: "35%",
		},
		{
			content: (user) => <PersonEmailCol margin="y-10" person={user.person} />,
			label: "Email",
			width: "40%",
		},
		{
			content: (user) => <PersonDocNumberCol margin="y-10" person={user.person} />,
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