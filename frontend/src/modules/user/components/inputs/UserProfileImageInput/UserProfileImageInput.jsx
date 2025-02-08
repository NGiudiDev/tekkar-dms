import { useContext } from "react";
import PropTypes from "prop-types";

import { UserDetailContext } from "../../../pages/detail/UserDetailContext";

import { Button, Dropzone, Flex, Icon, Image, Modal, Text } from "ds-loud-ng";
import { Formik, Form } from "formik";

import { Styles } from "./UserProfileImageInput.styles";

const DEFAULT_PROPS = {
  user: {}
};

export const UserProfileImageInput = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props
  };
  
  const ctx = useContext(UserDetailContext);

  return (
    <>
      <Styles.Wrapper>
        <Image img={attrs.user.profile_image_url} size="lg" type="round" />
        
        <Styles.IconWrapper onClick={ctx.handleProfileImageModal}>
          <Icon color="black_100" icon="camera" size="avatar" />
        </Styles.IconWrapper>
      </Styles.Wrapper>

      <Modal
        cancelButton={{ hide: true }}
        confirmButton={{ hide: true }}
        onClose={ctx.handleProfileImageModal}
        show={ctx.showImageModal}
        width="600px"
      >
        <Text margin="b-20" type="title" weight="bold">
          Cambiar foto de perfil
        </Text>

        <Formik
          initialValues={{ profile_image: null }}
          onSubmit={ctx.handleSubmitImageUser}
        >
          <Form>
            <Dropzone
              accept={["image"]}
              margin="t-16 b-32"
              maxCount={1}
              name="profile_image"
            />

            <Flex hAlign="end">
              <Button
                loading={ctx.isImageLoading}
                type="submit"
              >
                Actualizar
              </Button>
            </Flex>
          </Form>
        </Formik>
      </Modal>
    </>
  );
}

UserProfileImageInput.propsTypes = {
  user: PropTypes.object,
};