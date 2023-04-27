import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./utils/router";
import { AppContextProvider } from "./components/AppContextProvider";
import { UserContextProvider } from "./components/UserContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React>
  <AppContextProvider>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </AppContextProvider>
  // </React>
);
