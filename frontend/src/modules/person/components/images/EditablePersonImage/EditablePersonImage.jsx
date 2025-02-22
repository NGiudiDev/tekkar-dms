import { useState } from "react";
import PropTypes from "prop-types";

import { useRouter } from "../../../../common/hooks/useRouter";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import { Button, Dropzone, Flex, Icon, Image, Modal, Text } from "ds-loud-ng";
import { Formik, Form } from "formik";

import { Styles } from "./EditablePersonImage.styles";

import { uploadImage } from "../../../../common/services/images.services"; 
import { updatePersonDetail } from "../../../services/person.requests";
import { updateUser } from "../../../../session/store/store";
import toast from "react-hot-toast";

const DEFAULT_PROPS = {
  onSubmit: () => {},
  person: {},
};

export const UserProfileImageInput = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props
  };

  const [showModal, setShowModal] = useState(false);

  const loggedUser = useSelector(state => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const personImageMutation =  useMutation({
		mutationFn: async (modifiedObj) => {
			const id = parseInt(router.query.id);

      const headers = {
				"Content-Type": "multipart/form-data",
			};

			const img = await uploadImage(modifiedObj, headers); 

			return updatePersonDetail(id, { image_url: img.url });
		},
		onError: (err) => {
			const { status } = err.response;

			switch (status) {
			case 422:
				toast.error("Se han enviado datos que no son permitidos.");
				break;
			case 500:
				toast.error("Hubo un error en el servidor. Por favor intente más tarde.");
				break;
			}
		},
		onSuccess: (data) => {
			toast.success("Se ha actualizado la imagen.");

			if (data.user.id === loggedUser.id) {
				dispatch(updateUser(data.user));
			}

			handleShowModal();
		},
	});

  const handleShowModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const handleSubmit = (values) => {
    const file = values.profile_image[0].file;
		const formData = new FormData();

    formData.append("image", file);

		personImageMutation.mutate(formData);
  }

  return (
    <>
      <Styles.Wrapper>
        <Image img={attrs.user.profile_image_url} size="lg" type="round" />
        
        <Styles.IconWrapper onClick={handleShowModal}>
          <Icon color="black_100" icon="camera" size="avatar" />
        </Styles.IconWrapper>
      </Styles.Wrapper>

      <Modal
        cancelButton={{ hide: true }}
        confirmButton={{ hide: true }}
        onClose={handleShowModal}
        show={showModal}
        width="600px"
      >
        <Text margin="b-20" type="title" weight="bold">
          Cambiar foto de perfil
        </Text>

        <Formik
          initialValues={{ profile_image: null }}
          onSubmit={handleSubmit}
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
                loading={personImageMutation.isLoading}
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
  onSubmit: PropTypes.func,
  user: PropTypes.object,
};