// PrivateRoute.js
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
