import { NavLink } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton";

const Navbar = () => {

  const navlink =(
    <>
    
    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-[#ff995f] to-[#f93a13]" : "font-bold"
  }
>
  Home
</NavLink>
    <NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active font-bold" : "font-bold"
  }
>
  Dashboard
</NavLink>
    </>
  )
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col rounded-xl ">
        {/* Navbar */}
        <div className="w-full navbar bg-gradient-to-r from-[#f3f7ff] to-orange-100 rounded-xl p-5 hover:scale-105 transition duration-500">
          <div className="flex-none lg:hidden hover:bg-gradient-to-r hover:from-orange-200 hover:to-[#f3f7ff] rounded-lg hover:text-white">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-extrabold text-transparent text-xl sm:text-3xl bg-clip-text bg-gradient-to-r from-[#ff995f] to-[#facbcb]">TaskyyLab</div>
          <div className="flex-none hidden lg:block ">
            <ul className="menu menu-horizontal gap-4 justify-center items-center">
              {/* Navbar menu content here */}
              {
                navlink
              }
             
            
            </ul>
          </div>
          <div>
          <LoginButton/>
          </div>
        </div>
        {/* Page content here */}
       
      </div>
      <div className="drawer-side z-10 ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gradient-to-r to-[#f3f7ff] from-orange-100 gap-3 justify-center items-center">
          {/* Sidebar content here */}
          {
            navlink
          }
           <LoginButton/>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
