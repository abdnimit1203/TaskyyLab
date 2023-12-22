import { Link, NavLink } from "react-router-dom";
import LoginButton from "../Buttons/LoginButton";
import useAuth from "../../hooks/useAuth";
import LogOutButton from "../Buttons/LogOutButton";
import { BsFillChatTextFill } from "react-icons/bs";

const Navbar = () => {
  const { user, loading } = useAuth();
  // console.log(user);

  const navlink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active font-bold  text-transparent  bg-clip-text bg-gradient-to-r from-[#ff995f] to-[#f93a13]"
            : "font-bold"
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
      <NavLink
        to="/blogs"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active font-bold" : "font-bold"
        }
      >
        Our Blogs
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active font-bold" : "font-bold"
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to="/chats"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active font-bold" : "font-bold"
        }
      >
      <BsFillChatTextFill className="inline mr-1 text-orange-600" />
  Chats
      </NavLink>
    </>
  );
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col rounded-xl ">
        {/* Navbar */}
        <div className="w-full navbar bg-gradient-to-r from-[#f3f7ff] to-orange-100 rounded-xl p-5 hover:shadow-md transition duration-300">
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
          <div className="flex-1 px-2 mx-2 font-extrabold text-transparent text-xl sm:text-3xl bg-clip-text bg-gradient-to-r from-[#ff995f] to-[#facbcb]">
            <Link to={'/'}>
            <img src="/logo.PNG" alt="logo" className="w-32 border-b-2 border-red-500" />
            </Link>
          </div>
          <div className="flex-none hidden lg:block ">
            <ul className="menu menu-horizontal gap-4 justify-center items-center">
              {/* Navbar menu content here */}
              {navlink}
            </ul>
          </div>
          {user ? (
            <div className="avatar mx-6 online dropdown dropdown-end">
              <div tabIndex={0} role="button" className="w-12  rounded-full">
                {user.photoURL ? (
                  <img
                    src={user?.photoURL}
                    className="border-4 border-primary rounded-full"
                    alt="userphoto"
                  />
                ) : (
                  <img
                    src={"https://i.ibb.co/5x6DN2n/blank-dp.png"}
                    className="border-4 border-primary rounded-full"
                    alt="userphoto"
                  />
                )}
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit lg:w-96 flex text-center md:py-10 bg-gradient-to-tr from-rose-200 mt-5 border gap-3"
                >
                  <p className="text-lg font-semibold">
                    Hello, {user?.displayName}
                  </p>
                  <hr />
                  
                  <p className="font-bold">Email : {user?.email}</p>
                  {/* <button className="btn w-fit mx-auto btn-sm btn-outline rounded-2xl">
                    Profile
                  </button> */}
                  <LogOutButton />
                </div>
              </div>
            </div>
          ) : loading ? (
            <span className="loading loading-spinner loading-md text-primary mx-8"></span>
          ) : (
            <div>
              <LoginButton />
            </div>
          )}
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side z-10 ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gradient-to-r to-[#f3f7ff] from-orange-100 gap-3 justify-center items-center text-xl space-y-4">
          {/* Sidebar content here */}
          {navlink}
          <LoginButton />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
