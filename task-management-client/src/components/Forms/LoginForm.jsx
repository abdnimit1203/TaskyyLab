import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import toast from "react-hot-toast";
import Lottie from "lottie-react";
import loginlottie from "../../assets/loginlottie.json";

import SocialLogin from "../Buttons/SocialLogin";
import useAuth from './../../hooks/useAuth';

const LoginForm = () => {
  const [showPassword, setShowPassord] = useState(false);
  const {user,signIn} = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>{
    
    
    console.log(data)
if(!user){
  const toastId = toast.loading("logging in...");

  try{
     await signIn(data.email,data.password)
    .then(res=>{
      console.log(res.user)
      toast.success(
        "User logged in successfully!",

        { id: toastId }
      );
      navigate(location?.state ? location.state : "/dashboard");
    })
  }catch(err){
    toast.error(err.message, { id: toastId });
  }
}else{
  toast('LOG OUT OF OTHER ACCOUNT FIRST!',
  {
    icon: '⚠',
    style: {
      borderRadius: '10px',
      background: '#fadf1b',
      color: '#1a1a1a',
    },
  }
);
}
   
  
  }


  return (
    <section className="bg-base-100 text-neutral">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative lg:block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 hidden ">
        <Lottie animationData={loginlottie} loop={true} className="w-[60%] mx-auto h-full" />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 text-center ">
          <div className="max-w-xl md:max-w-3xl ">
            <Link to={"/"}>
              <button className=" px-5  rounded-xl button-77 button-78">
                Go Home
              </button>
            </Link>

            {/* <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to <br />ABuild Homes Estates
            </h1> */}

            <h1 className="mt-6 text-2xl font-bold   sm:text-3xl md:text-4xl">
              LOGIN
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
            Seamless Task Management <br />Your Path to Personal Success
            </p>
          

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6 text-left justify-center items-center">
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium "
                >
                  Email Adress
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  {...register("email")}
                  className="mt-1 w-full border-2 rounded-md border-gray-200 focus:outline-2 px-3 bg-slate-100 focus:outline-slate-400 text-sm text-gray-700 py-3   shadow-inner"
                />
              </div>

              <div className="col-span-6 relative">
                <label
                  htmlFor="Password"

                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  name="password"
                  {...register("password", { required: true })}
                  
                  className="mt-1 w-full border-2 rounded-md border-gray-200 focus:outline-2 px-3 bg-slate-100 focus:outline-slate-400 text-sm text-gray-700 py-3   shadow-inner"
                />
                {errors.password && <span className="text-red-400">Password is required</span>}

                <span
                  onClick={() => setShowPassord(!showPassword)}
                  className=" cursor-pointer top-[55%] right-6 flex my-2 items-center w-fit"
                >
                  {showPassword ? <MdOutlineCheckBox className="text-2xl mr-2" />: <MdCheckBoxOutlineBlank className="text-2xl mr-2"/> } 
                  Show Password
                </span>
              
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mx-auto">
                <button
                  type="submit"
                  className="button-77"
                >
                  Login
                </button>
              </div>
              <div className="col-span-4">
                <p className="mt-4  sm:mt-0 text">
                  Dont have an account?
                  <Link
                    to={"/register"}
                    className="text-primary ml-2 font-semibold underline"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <span className="relative flex justify-center py-10">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

              <span className="relative z-10 bg-base-200 px-6 text-neutral">
                OR
              </span>
            </span>
            <div className="mx-auto w-fit">

            <SocialLogin/>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default LoginForm;
