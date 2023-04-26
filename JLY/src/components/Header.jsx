import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <main className="header-overlay">
        <Link to={"/"} onClick={(e) => navigate("/")}>
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
