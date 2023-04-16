import Layout from "../components/layouts/layout";
import App from "../routes/App";
import Entries from "../routes/Entries/Entries";
import ErrorPage from "../routes/ErrorPage/errorPage";
import { createBrowserRouter } from "react-router-dom";

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
]);
