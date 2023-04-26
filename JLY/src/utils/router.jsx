import Layout from "../components/layouts/layout";
import LoginLayout from "../components/layouts/Login/Signup/LoginLayout";
import App from "../routes/App";
import Entries from "../routes/Entries/Entries";
import ErrorPage from "../routes/ErrorPage/errorPage";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "entries",
    element: (
      <Layout>
        <Entries />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: (
      <LoginLayout>
        <Login />
      </LoginLayout>
    ),
  },
  {
    path: "signup",
    element: (
      <LoginLayout>
        <Signup />
      </LoginLayout>
    ),
  },
]);
