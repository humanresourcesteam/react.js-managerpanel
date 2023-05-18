import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./logout.scss";

function Logout() {
  const history = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("erole");
    history("/login");
  };

  return (
    <span className="logout" onClick={handleLogout}>
      Logout
    </span>
  );
}

export default Logout;
