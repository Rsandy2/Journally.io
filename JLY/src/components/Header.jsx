import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <Fragment>
      <main className="header-overlay">
        <Link to={"/"}>
          <h1 className="header-logo">Journally</h1>
        </Link>
        <a href={"/login"}>
          <button className="header-button text-sm-black">Login</button>
        </a>
      </main>
    </Fragment>
  );
};

export default Header;
