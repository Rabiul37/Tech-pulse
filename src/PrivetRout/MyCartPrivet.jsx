import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const MyCartPrivet = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1>this is loading</h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/Login"></Navigate>;
};
export default MyCartPrivet;
MyCartPrivet.propTypes = {
  children: PropTypes.node,
};
