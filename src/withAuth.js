import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();

    useEffect(() => {
      let isMounted = true; // eklenen kısım

      const token = Cookies.get("token");
      const role = Cookies.get("erole");

      if (token) {
        const decodedToken = jwtDecode(token);
        const current_time = Date.now().valueOf() / 1000;

        if (decodedToken.exp < current_time || role !== "MANAGER") {
          Cookies.remove("token");
          Cookies.remove("erole");
          if (isMounted) navigate("/login"); // eklenen kısım
        }
      } else {
        Cookies.remove("token");
        Cookies.remove("erole");
        if (isMounted) navigate("/login"); // eklenen kısım
      }

      return () => {
        isMounted = false; // eklenen kısım
      };
    }, [navigate]);

    return <ComponentToProtect {...props} />;
  };
}
