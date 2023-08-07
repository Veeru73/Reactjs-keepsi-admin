import React from "react";
import LogInBackground from "../images/logIn-background.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../services/Api_calling";
import { useRef, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { AuthContext } from "../states/AuthContext";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const pwdRef = useRef();
  const { setLoggedIn } = useContext(AuthContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (
      emailRef.current.value.toString().trim() === "" ||
      pwdRef.current.value.toString().trim() === ""
    ) {
      toast.error("All fields are required!");
      return;
    }
    setLoading(true);
    const data = {
      email: emailRef.current.value,
      password: pwdRef.current.value,
    };
    const res = await login(data);
    if (res.success) {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("authToken", `${res.data.token}`);
      toast.success("Logged in successfully");

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 1000);
    } else {
      toast.error(res.msg);
    }
    setLoading(false);
  };

  return (
    <>
      <ToastContainer />
      <section
        className="vh-100"
        style={{
          backgroundImage: `url(${LogInBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Welcome back</h3>
                  <form action="" onSubmit={onSubmitHandler}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Email
                      </label>
                      <input
                        ref={emailRef}
                        name="email"
                        id="email"
                        type="email"
                        className="form-control form-control-lg"
                        required={true}
                        placeholder="email"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Password
                      </label>
                      <input
                        name="password"
                        id="password"
                        ref={pwdRef}
                        type="password"
                        className="form-control form-control-lg"
                        required={true}
                        placeholder="Password"
                      />
                    </div>
                    {loading ? (
                      <Loader />
                    ) : (
                      <button
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                      >
                        LogIn
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
