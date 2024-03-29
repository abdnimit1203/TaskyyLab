import { MdDashboard } from "react-icons/md";
import UserGreetings from "../components/DashboardComponents/UserGreetings";
import TaskManagement from "../components/DashboardComponents/TaskManagement";
import { Link, NavLink } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import LogOutButton from "../components/Buttons/LogOutButton";

const Dashboard = () => {
  const dashLinks = (
    <>
      <NavLink
        to="/dashboard"
        className={({ isActive, isPending }) =>
          isPending ? "pending " : isActive ? "active font-bold btn rounded-2xl bg-gradient-to-r text-white from-purple-400  to-pink-600" : "btn my-2 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-white"
        }
      >
       <MdOutlineSpaceDashboard />
 Dashboard
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending " : isActive ? "active font-bold btn rounded-2xl bg-gradient-to-r text-white from-purple-400  to-pink-600" : "btn my-2 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-white"
        }
      >
       <FaUser />
 Profile
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending " : isActive ? "active font-bold btn rounded-2xl bg-gradient-to-r text-white from-purple-400  to-pink-600" : "btn my-2 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-white"
        }
      >
       <IoSettingsSharp />
 Settings
      </NavLink>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  justify-center">
        {/* Page content here */}
        <div className="flex w-full bg-gradient-to-tr from-white to-pink-100 items-center gap-6 p-2 lg:hidden">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-outline  drawer-button  lg:hidden"
          >
            <MdDashboard className="text-5xl py-2" />
          </label>
          <h2 className="text-xl font-bold ">Dashboard</h2>
        </div>
        <div className="min-h-screen bg-gradient-to-tr from-orange-300 to-pink-300 glass ">
          <div className="blur min-h-screen opacity-30 bg-red-50 -z-10 absolute"></div>
          <div>
            <UserGreetings />
            <TaskManagement />
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full  text-base-content bg-white">
          {/* Sidebar content here */}
          <div className="px-2 font-extrabold text-transparent text-xl sm:text-3xl bg-clip-text bg-gradient-to-r from-[#ff995f] to-[#facbcb] pb-10 mx-auto" >
            <Link to={"/"}>
              <img
                src="/logo.PNG"
                alt="logo"
                className="w-40 pt-10 border-b-2 border-red-500"
              />
            </Link>
          </div>
          {dashLinks}
          <hr  className="border-b-2 my-6 "/>
          <Link to={'/'} className="btn btn-outline  ">HomePage</Link>
          <div className="w-fit mx-auto my-4">

          <LogOutButton/>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
