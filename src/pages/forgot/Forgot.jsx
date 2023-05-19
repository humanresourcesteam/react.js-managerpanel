import "./forgot.scss";
import Bro from "../../assets/forgot.png";
import AuthService from "../../service/AuthService";
import { useState,useEffect } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import MailService from "../../service/MailService";
const Forgot = () => {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    MailService.forgotPassword(admin).then(
      (response) => {
        window.location.replace("/login");
      },
      () => {
        setLoginError(true);
      }
    );
  };

  return (
    <div className="login">
      <div className="left">
        <img src={Bro} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <h1 className="title">Forgot Password</h1>
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

          {loginError && (
            <p style={{ color: "#ba68c8" }}>Login is incorrect please try again</p>
          )}
          <div></div>
          <div className="form__button">
            <input type="submit" className="form__submit" value="Forgot" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
