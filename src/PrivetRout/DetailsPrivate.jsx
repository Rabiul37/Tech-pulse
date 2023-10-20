import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
const DetailsPrivate = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1>This is loading</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/Login"></Navigate>;
};

export default DetailsPrivate;
DetailsPrivate.propTypes = {
  children: PropTypes.node,
};
