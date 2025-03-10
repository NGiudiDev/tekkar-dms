import React from "react";

import { useCarCreateContext } from "./hooks/use_car_create_context";
import { useRouter } from "@hooks";

import { PageMessageLayout } from "@common/components";
import { CarInformationForm } from "@car/components";
import { Form, Formik } from "formik";

import { Button, Flex, Text } from "ds-loud-ng";

import { carCreationSchema } from "@car/services/car_validations_services";

export const CarCreateContent = () => {
  const ctx = useCarCreateContext();
  const router = useRouter();

  if (!router.query.owner_id) {
    return(
      <PageMessageLayout
        description="Para crear un vehículo, es necesario ir al detalle del cliente y elegir la opción 'agregar vehículo' que se encuentra en el menú de acciones."
        isFullScreen
        title="Falta seleccionar un cliente"
      />
    );
  }

  return (
    <>
      <Text margin="b-40" type="title">
        Nuevo vehículo
      </Text>

      <Formik
        initialValues={ctx.car}
        onSubmit={ctx.handleSubmitCar}
        validationSchema={carCreationSchema}
      >
        {formik => (
          <Form>
            <CarInformationForm />
                          
            <Flex margin="t-24" hAlign="end">
              <Button disabled={!formik.isValid} type="submit">
                Crear
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
};