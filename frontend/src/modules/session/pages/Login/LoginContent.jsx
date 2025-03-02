import React from "react";

import { useLoginContext } from "./hoooks/useLoginContext";

import { PersonEmailInput } from "@person/components";
import { UserPasswordInput } from "@user/components";
import { Form, Formik } from "formik";

import { Button, Text } from "ds-loud-ng";

import { Styles } from "./LoginPage.styles";

import { loginYupSchema } from "@session/services/session.validations";

export const LoginContent = () => {
  const ctx = useLoginContext();

  return (
    <Styles.Wrapper>
      <Text margin="b-20" type="title">
        Bienvenido 
      </Text>
      
      <Formik 
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={ctx.handleSubmit}
        validationSchema={loginYupSchema}
      >
        <Form>
          <PersonEmailInput margin="b-8" />

          <UserPasswordInput />
          
          {ctx.error && (
            <Text margin="b-20">
              El email o contraseña ingresado es inválido.
            </Text>
          )}

          <Button fullWidth margin="t-24" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </Formik>

      <Button fullWidth kind="text" margin="t-8" onClick={ctx.handleGoToPasswordRecovery}>
        Recuperar contraseña
      </Button>
    </Styles.Wrapper>
  );
};