import { Fragment } from "react";
import Header from "../Header";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <main className="layout-container">
        <Header />
        <div className="layout-body">{children}</div>
      </main>
    </Fragment>
  );
};

export default Layout;
