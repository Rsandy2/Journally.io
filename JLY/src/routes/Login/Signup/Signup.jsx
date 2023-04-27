import { Fragment, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "../Login.css";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { UserContext } from "../../../utils/context";
import { useUsers } from "../../../hooks/useUsers";

const Signup = (props) => {
  const navigate = useNavigate();
  // const { setUserData } = useContext(UserContext);
  const { data: user, ...userUtil } = useUsers();
  const { setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const stress = () => {
    const spike = setTimeout(() => {
      console.log("Spiked");
    }, 1000);
  };

  const sideRequest = async (data) => {
    const LoginRes = await axios.post("http://localhost:5173/signup", data);
    setUser({
      token: LoginRes.data.token,
      user: LoginRes.data.user,
    });
    console.log(LoginRes.data);
    localStorage.setItem("auth-token", LoginRes.data.token);
    return LoginRes;
  };

  const onSubmit = async (data) => {
    try {
      toast.promise(sideRequest(data), {
        pending: {
          render() {
            return "Loading";
          },
          icon: false,
        },
        success: {
          render(data) {
            console.log(data.data);
            const email = data?.data?.data.email;
            return `Logging in with, ${email}`;
          },
          onClose: () => {
            navigate("/");
          },
          icon: "📚",
        },
        error: {
          render(err) {
            // When the promise reject, data will contains the error
            console.log(err);
            return `Error: ${err.data.response.data.msg}`;
          },
        },
      });
    } catch (err) {}
  };

  return (
    <Fragment>
      <main className="login-layout-flow">
        <form className="login-wrapper" onSubmit={handleSubmit(onSubmit)}>
          <a href={"/login"}>
            <p className="text-xs page-change">Login</p>
          </a>
          <div className="login-info-box">
            <h2 className="text-xl login-title">Sign Up</h2>
            <p>Sign up below to save your work.</p>
          </div>
          <div className="provider-container">
            <button className="provider">Continue with Google</button>
            <button className="provider">Continue with Github</button>
          </div>
          {/* <hr /> */}
          <p className="text-xs credentials-info">Sign in using credentials</p>
          <input
            className="login-form-input"
            placeholder="Enter Email"
            {...register("email")}
          />
          <input
            className="login-form-input"
            placeholder="Enter Password"
            {...register("password")}
          />
          <input
            className="login-form-input"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <input
            className="text-sm sign-button"
            type="submit"
            value={"Signup"}
          />
        </form>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
};

export default Signup;
