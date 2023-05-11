import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
  return function AuthenticatedComponent(props) {
    const history = useNavigate();

    useEffect(() => {
      const token = Cookies.get("token");

      if (!token) {
        history("/login");
      }
    }, [history]);

    return <ComponentToProtect {...props} />;
  };
}
