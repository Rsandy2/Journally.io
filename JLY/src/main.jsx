import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./utils/router";
import { AppContextProvider } from "./components/AppContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
