import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import tasktodolottie from "../../assets/tasktodolottie.json";
const BannerHome = () => {
  return (
    <div className="p-6 lg:p-10 lg:py-16 flex flex-col lg:flex-row gap-6 items-center bg-gradient-to-r from-orange-100 to-blue-100 rounded-xl ">
      <div className="lg:w-[70%] lg:mx-auto flex flex-col gap-4">
        <h1 className="font-bold text-2xl lg:text-3xl pt-6">
          Taskyy Lab: <span className="text-sky-500"> Your Personal Task Control Hub</span>
        </h1>
        <p className="text-lg mt-4">
          Immerse yourself in a world of unparalleled task efficiency. Our
          platform empowers individuals to seamlessly manage their daily
          workload, providing a personalized hub for task mastery.
        </p>
        <Link to={'/login'}>
          <button className="button-77 button-78 ">Lets Explore</button>
        </Link>
      </div>
      <div className="w-fit mx-auto">
        <Lottie animationData={tasktodolottie} loop={true} className="w-80 md:w-[60%] mx-auto" />
      </div>
    </div>
  );
};

export default BannerHome;
