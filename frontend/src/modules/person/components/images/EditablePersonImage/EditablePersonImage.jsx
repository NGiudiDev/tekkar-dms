import { useState } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import { Formik, Form } from "formik";

import { Button, Dropzone, Flex, Icon, Image, Modal, Text } from "ds-loud-ng";

import { Styles } from "./EditablePersonImage.styles";

import { updatePersonDetail } from "../../../../person/services/person.requests";
import { uploadImage } from "../../../../common/services/images.services";
import { updatePerson } from "../../../../../store/store";

import toast from "react-hot-toast";

const DEFAULT_PROPS = {
  onImageChange: () => {},
  person: {},
};

//TODO: agregar el schemaValidation.
export const EditablePersonImage = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props
  };

  const [showModal, setShowModal] = useState(false);

  const loggedUser = useSelector(state => state.user);
  const dispatch = useDispatch();

  const personImageMutation =  useMutation({
		mutationFn: async (modifiedObj) => {
      const headers = {
				"Content-Type": "multipart/form-data",
			};

			const img = await uploadImage(modifiedObj, headers); 

			return updatePersonDetail(attrs.person.id, { image_url: img.url });
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
		onSuccess: (person) => {
			toast.success("Se ha actualizado la imagen.");

			if (person.id === loggedUser.person.id) {
				dispatch(updatePerson(person));
			}
      
      attrs.onImageChange && attrs.onImageChange(person);
			handleShowModal();
		},
	});

  const handleShowModal = () => {
    setShowModal((prevValue) => !prevValue);
  };

  const handleSubmit = (values) => {
    const file = values.image_url[0].file;
		const formData = new FormData();

    formData.append("image", file);

		personImageMutation.mutate(formData);
  }

  return (
    <>
      <Styles.Wrapper>
        <Image img={attrs.person.image_url} size="lg" type="round" />
        
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
        <Text margin="b-20" type="title">
          Cambiar foto de perfil
        </Text>

        <Formik
          initialValues={{ image_url: [] }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Dropzone
              accept={["image"]}
              margin="b-32 l-28 t-16"
              maxCount={1}
              name="image_url"
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

EditablePersonImage.propsTypes = {
  onImageChange: PropTypes.func,
  person: PropTypes.object,
};