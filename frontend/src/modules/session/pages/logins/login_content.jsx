import React from "react";

import { useLoginContext } from "./hoooks/use_login_context";

import { PersonEmailInput } from "@person/components";
import { UserPasswordInput } from "@user/components";
import { Form, Formik } from "formik";

import { Button, Text } from "ds-loud-ng";

import { Styles } from "./login_page_styles";

import { loginSchema } from "@session/services/session_validations_services";

export const LoginContent = () => {
  const ctx = useLoginContext();

  return (
    <Styles.Wrapper>
      <Text margin="b-20" type="title">
        Bienvenido 
      </Text>
      
      <Formik 
        initialValues={ctx.user}
        onSubmit={ctx.handleSubmit}
        validationSchema={loginSchema}
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