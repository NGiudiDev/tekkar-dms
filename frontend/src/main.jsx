//TODO: verificar orden de la carpeta /modules/common
//TODO: verificar orden de la carpeta /modules/service
//TODO: verificar orden de la carpeta /modules/service_report
//TODO: verificar orden de la carpeta /modules/session
//TODO: verificar orden de la carpeta /modules/user

//? a nivel funcional.
//TODO: permitir cambiar el propietario de un auto.
//TODO: probar que funcione el EditablePersonImage.
//TODO: crear el endpoint de update person para modificar la foto.

//? a nivel código
//TODO: ver una forma de importar los contextos por medio de un hook.
//TODO: corregir los espaciados de las pantallas para que no se mueva el contenido cuando se edita.
//TODO: agregar el linter para mantener un estandar.

import React from "react";
import { createRoot } from "react-dom/client";

import { store } from "./modules/session/store/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { ThemeDS } from "ds-loud-ng";
import { App } from "./App.jsx";

import { GlobalStyles } from "./App.styles.js";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />

    <QueryClientProvider client={queryClient}>
      <ThemeDS>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ThemeDS>
    </QueryClientProvider>

    <Toaster position="bottom-right" />
  </React.StrictMode>
)
