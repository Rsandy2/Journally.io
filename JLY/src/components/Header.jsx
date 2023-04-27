import { Fragment, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../utils/context";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user);

  const login = () => {
    // localStorage.setItem("auth-token", "");

    navigate("/login");
  };
  const logout = () => {
    // localStorage.setItem("auth-token", "");
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {}, []);

  return (
    <Fragment>
      <main className="header-overlay">
        <Link to={"/"} onClick={(e) => navigate("/")}>
          <h1 className="header-logo">Journally</h1>
        </Link>
        <div className="header-right">
          <button
            className="entry-button-header text-sm"
            onClick={() => navigate("/entries")}
          >
            Entries
          </button>

          <div>
            {user.user === null ? (
              <button onClick={login} className="header-button text-sm-black">
                Login
              </button>
            ) : (
              <button onClick={logout} className="header-button text-sm-black">
                Logout
              </button>
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default Header;
