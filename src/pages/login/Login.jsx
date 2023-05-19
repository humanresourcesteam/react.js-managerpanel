import "./login.scss";
import Bro from "../../assets/login.svg";
import AuthService from "../../service/AuthService";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Login = () => {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (Cookies.get("token")) {
      setIsLoggedIn(true);
      window.location.replace("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(admin).then(
      (response) => {
        Cookies.set("token", response.data.token);
        Cookies.set("erole", response.data.erole);
        window.location.replace("/");
      },
      () => {
        setLoginError(true);
      }
    );
  };

  return (
    !isLoggedIn && (
      <div className="login">
        <div className="left">
          <img src={Bro} alt="" />
        </div>
        <div className="right">
          <div className="top">
            <h1 className="title">HumanCo Login</h1>
          </div>
          <form className="form__content" onSubmit={handleSubmit}>
            <div className="form__box">
              <input
                type="text"
                className="form__input"
                placeholder="Enter Email"
                onChange={(e) => {
                  {
                    setAdmin({ ...admin, email: e.target.value });
                  }
                }}
              />
              <label htmlFor="" className="form__label">
                ENTER EMAIL
              </label>
              <div className="form__shadow"></div>
            </div>
            <div className="form__box">
              <input
                type="password"
                className="form__input"
                placeholder="Enter password"
                onChange={(e) => {
                  {
                    setAdmin({ ...admin, password: e.target.value });
                  }
                }}
              />
              <label htmlFor="" className="form__label">
                ENTER PASSWORD
              </label>
              <div className="form__shadow"></div>
            </div>

            {loginError && (
              <p style={{ color: "red" }}>
                Login is incorrect please try again
              </p>
            )}
            <div>
              <Link
                to="/forgot"
                style={{ textDecoration: "none", color: "##ba68c8" }}
              >
                <span className="forgot">Forgot my password </span>
              </Link>
            </div>
            <div className="form__button">
              <input type="submit" className="form__submit" value="Sign-In" />
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Login;
