import React from "react";
import { createRoot } from "react-dom/client";

import { store } from "./store/store";

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
);