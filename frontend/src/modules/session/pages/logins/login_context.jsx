import React, { useState } from "react";
import PropTypes from "prop-types";

import { LoginContext } from "./hoooks/use_login_context.jsx"; 

import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useRouter } from "@hooks";

import { userLogin } from "@session/services/session_requests_services";
import { login } from "@store/store";
import toast from "react-hot-toast";

import { PATH } from "@router/constants/routes_consts";

const DEFAULT_PROPS = {
  children: null,
};

export const LoginProvider = (props) => {
  const attrs = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const [error, setError] = useState(false);
  
    const dispatch = useDispatch();
    const router = useRouter();
  
    const userMutation =  useMutation({
      mutationFn: (modifiedObj) => userLogin(modifiedObj),
      onError: (err) => {
        const { status } = err.response;
  
        switch (status) {
        case 500:
          toast.error("Hubo un error en el servidor. Por favor intente más tarde.");
          break;
        }
  
        setError(true);
      },
      onSuccess: (data) => {
        dispatch(login(data));
        router.push(PATH.cars);
      },
    });
  
    const handleGoToPasswordRecovery = () => {
      router.push(PATH.passwordRecovery);
    };
  
    const handleSubmit = (formValues) => {
      setError(false);
      userMutation.mutate(formValues);
    };

  const valueObj = {
    error,
    handleSubmit,
    handleGoToPasswordRecovery,
    user: {
      email: "",
      password: "",
    },
  };

  return (
    <LoginContext.Provider value={valueObj}>
      {attrs.children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node,
};