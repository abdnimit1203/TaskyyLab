import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
        
        
        <div className="flex flex-col w-[90%] lg:w-[80%] mx-auto ">
           <div><Navbar></Navbar></div> 
           <div className="min-h-screen"><Outlet></Outlet></div>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    );
};

export default MainLayout;