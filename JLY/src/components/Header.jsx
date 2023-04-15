import { Fragment } from "react";
import "./Header.css";
const Header = () => {
  return (
    <Fragment>
      <main className="header-overlay">
        <h1 className="header-logo">Journally</h1>
        <button className="header-button text-sm-black">Login</button>
      </main>
    </Fragment>
  );
};

export default Header;
