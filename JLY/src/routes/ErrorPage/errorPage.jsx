import { useRouteError } from "react-router-dom";
import "./errorPage.css";
export default function ErrorPage() {
  const error = useRouteError();
  console.log("Error Page", error);
  return (
    <>
      <main className="error-page">
        <h2 className="text-xl">Sorry, this page is invalid</h2>
        <div className="error-message text-sm">
          <p>An error has occured</p>|<p>{error.statusText || error.message}</p>
        </div>
      </main>
    </>
  );
}
