import { MdOutlineEmail } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";
import loader from "../../assets/loader.json";
const UserGreetings = () => {
  const { user, loading } = useAuth();
  return (
    <div className="p-6 lg:p-10 lg:py-16 flex flex-col lg:flex-row gap-6 ">
      {loading ? (
        <div>
          <Lottie
            animationData={loader}
            loop={true}
            className="w-[80%] lg:w-96 mx-auto"
          />
        </div>
      ) : (
        <>
          <div className=" bg-gradient-to-tr from-[#ffd8d9] to-[#ffbdbf]  rounded-xl justify-center items-center flex-1 text-[#be6975] p-10 ">
            <h2 className="text-xl lg:text-2xl pb-4 font-bold">
              Welcome to{" "}
              <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                DASHBOARD
              </span>
              , <br /> {user?.displayName}
            </h2>
            <p>
              You have total 25 task and already completed 68% <br /> from your
              total tasks!
            </p>
          </div>
          <div className="flex flex-col glass justify-center items-center p-6 rounded-xl bg-[#fcf6c1ab] text-[#97505a]">
            <h2 className="font-bold">Profile</h2>
            <p>
              <span>80% Completed your profile.</span>
            </p>
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                className="border-4 border-primary rounded-full w-48 mt-10"
                alt="userphoto"
              />
            ) : (
              <img
                src={"https://i.ibb.co/5x6DN2n/blank-dp.png"}
                className="border-4 border-primary rounded-full w-48 mt-10"
                alt="userphoto"
              />
            )}

            <p className="text-lg font-bold pt-2">{user?.displayName}</p>
            <p className="text-sm font-semibold pt-2">
              <MdOutlineEmail className="text-xl inline " /> {user?.email}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserGreetings;
