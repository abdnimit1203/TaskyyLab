import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loader from "../assets/loader.json";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center" >
        <Lottie animationData={loader} loop={true} className="w-72 md:w-96"/>
      </div>
    );
  } else {
    if (user) {
      return children;
    } else {
      Swal.fire({
    
        icon: "warning",
        color: "white",
        text: "You have to log in first",
        showConfirmButton: false,
        timer: 3000,
        background: "#3bb1ff",
      });
    }
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
