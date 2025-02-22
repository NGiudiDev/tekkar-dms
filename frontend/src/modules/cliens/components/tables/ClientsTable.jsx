import PropTypes from "prop-types";

import { useRouter } from "../../../../hooks";

import { 
  PersonDocNumberCol,
  PersonEmailCol,
  PersonImageCol,
  PersonNameCol,
} from "../../../person/components";

import { Flex, Table } from "ds-loud-ng";

import { PATH } from "../../../../router/constants/routes.consts";

const DEFAULT_PROPS = {
  list: [],
};

export const ClientsTable = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const router = useRouter();

  const columns = [
    {
      content: (person) => (
        <Flex>
          <PersonImageCol person={person} />
          <PersonNameCol margin="l-8 y-10" person={person} />
        </Flex>	
      ),
      label: "Nombre",
      width: "35%",
    },
    {
      content: (person) => <PersonEmailCol margin="y-10" person={person} />,
      label: "Email",
      width: "40%",
    },
    {
      content: (person) => <PersonDocNumberCol margin="y-10" person={person} />,
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

ClientsTable.propTypes = {
  list: PropTypes.array,
};
