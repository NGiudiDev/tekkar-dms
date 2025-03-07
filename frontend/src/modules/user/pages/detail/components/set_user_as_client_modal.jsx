import React from 'react'

import { useUserDetailContext } from "../hooks/use_user_detail_context.jsx";
import { useMutation } from "@tanstack/react-query";

import { Modal, Text } from "ds-loud-ng";

import { updatePersonDetail } from "@person/services/person_requests_services";
import toast from "react-hot-toast";

export const SetUserAsClientModal = () => {
  const ctx = useUserDetailContext();

	const personMutation =  useMutation({
		mutationFn: (params) => {
			return updatePersonDetail(ctx.user.person.id, params);
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
		onSuccess: () => {
			toast.success("Se ha actualizado la información del usuario.");
		},
	});

  const handleConfirmClick = () => {
    personMutation.mutate({ roles: "client,user" });
  }

  return (
    <Modal
      confirmButton={{ onClick: handleConfirmClick }}
      onClose={ctx.handleOcultModal}
      show={ctx.showModal === "setUserAsClient"}
      width="600px"
    >
      <Text margin="b-24" type="title">
        Establecer {ctx.user.person.name} como cliente
      </Text>

      <Text margin="b-32">
        Al confirmar esta acción, el usuario también será tratado como un cliente. Esto
        permitirá asignarle coches y gestionar su información como tal. ¿Estás seguro
        de que deseas continuar?
      </Text>
    </Modal>
  )
};
