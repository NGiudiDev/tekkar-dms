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

export const ClientTable = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const router = useRouter();

  const columns = [
    {
      content: (client) => (
        <Flex>
          <PersonImageCol person={client} />
          <PersonNameCol margin="l-8 y-10" person={client} />
        </Flex>	
      ),
      label: "Nombre",
      width: "35%",
    },
    {
      content: (client) => <PersonEmailCol margin="y-10" person={client} />,
      label: "Email",
      width: "40%",
    },
    {
      content: (client) => <PersonDocNumberCol margin="y-10" person={client} />,
      label: "Documento",
      width: "25%",
    },
  ];

  const handleRowClick = (row) => {
    router.push(`${PATH.clients}/${row.id}`);
  };

  return (
    <Table
      columns={columns}
      data={attrs.list}
      onClick={handleRowClick}
    />
  );
};

ClientTable.propTypes = {
  list: PropTypes.array,
};