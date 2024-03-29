import Lottie from "lottie-react";
import errorz from "../assets/errorz.json"
import { Link, useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center text-center flex-col" >
            <Lottie animationData={errorz} loop={true} className="w-80 lg:w-96" />
            <h2>Page Not Found</h2>
            <div className="flex gap-4 py-6">

  
            <button onClick={() => navigate(-1)} className="button-77">
                Go back
            </button>
   
            <Link to={'/'}>
            <button className="button-77  button-78">
                Home
            </button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;