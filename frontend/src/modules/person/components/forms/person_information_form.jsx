import React from "react";
import PropTypes from "prop-types";

import { ThreeColumnsGrid } from "@common/components";
import {
  EditablePersonImage,
  PersonDocNumberInput,
  PersonEmailInput,
  PersonImage,
  PersonNameInput,
  PersonPhoneInput,
} from "@person/components";

import { Flex } from "ds-loud-ng";

const DEFAULT_PROPS = {
	onImageChange: null,
	person: {},
};

export const PersonInformationForm = (props) => {
  const attrs = {
		...DEFAULT_PROPS,
		...props,
	};

  return (
    <ThreeColumnsGrid.Grid>			
      <ThreeColumnsGrid.Row>
        <PersonNameInput margin="b-8" />
        <PersonDocNumberInput margin="b-8" />
      </ThreeColumnsGrid.Row>

      <ThreeColumnsGrid.Row>
        <PersonEmailInput margin="b-8" />
        <PersonPhoneInput margin="b-8" />
      </ThreeColumnsGrid.Row>

      <ThreeColumnsGrid.Row>
        <Flex hAlign="center" margin="t-24">
          {attrs.onImageChange !== null ? (
            <EditablePersonImage
              onImageChange={attrs.onImageChange}
              person={attrs.person}
            />
          ) : (
            <PersonImage person={attrs.person} />
          )}
        </Flex>
      </ThreeColumnsGrid.Row>
    </ThreeColumnsGrid.Grid>	
  );
};

PersonInformationForm.propTypes = {
  onImageChange: PropTypes.func,
  person: PropTypes.object,
};