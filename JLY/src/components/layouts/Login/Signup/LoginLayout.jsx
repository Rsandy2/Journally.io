import { Fragment } from "react";
import "./LoginLayout.css";
const LoginLayout = ({ children }) => {
  return (
    <Fragment>
      <main className="login-layout-container">
        <div className="login-layout-content">{children}</div>
        <div className="layout-image">
          <img
            className="image-inner"
            src="https://images5.alphacoders.com/130/1306582.jpg"
          />
        </div>
      </main>
    </Fragment>
  );
};

export default LoginLayout;
