import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SocialLogin from "../components/Buttons/SocialLogin";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import registerlottie from "../assets/registerlottie.json";


const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Register = () => {
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassord] = useState(false);
  const { user, signupUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb and then get an url
    const username = data.first_name + " " + data.last_name
    console.log(username);

   if(!user){
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      
      const toastId = toast.loading("creating new account...");

      try {
        await signupUser(data.email, data.password)
          .then((userCredential) => {
            updateUserProfile(username,res.data.data.display_url )
              .then(() => {
                //create user entry in the database
                const userInfo = {
                  name: username,
                  email: data.email,
                  role: "user"

                };
                axiosPublic.post("/api/v1/users", userInfo).then((res) => {
                  if (res.data?.insertedId) {
                    console.log("user added to the database");
                    toast.success(
                      "Account created successfully!",

                      { id: toastId }
                    );

                    navigate(location?.state || "/dashboard");
                  }
                });
              })
              .catch((err) => {
                console.log(err.message);
              });
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      } catch (err) {
        toast.error(err.message, { id: toastId });
      }
    } else {
      toast.error("OOPS! Something went wrong");
    }
   }else{
    toast("LOG OUT OF OTHER ACCOUNT FIRST!", {
      icon: "⚠",
      style: {
        borderRadius: "10px",
        background: "#fadf1b",
        color: "#1a1a1a",
      },
    });
   }
  };
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12 justify-center items-center">
      <aside className="relative lg:block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 hidden ">
        <Lottie animationData={registerlottie} loop={true} className="w-[60%] mx-auto h-full" />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 xl:w-[80%] lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link to={"/"}>
              <button className="button-77 button-78">
                Go Home
              </button>
            </Link>

            {/* <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to <br />ABuild Homes Estates
            </h1> */}

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Sign Up
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
            Sign up now and take the first step towards a more organized and productive life. Join a community of achievers and streamline your tasks effortlessly. Your journey to enhanced productivity starts here. Dont miss out : register today!
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  {...register("first_name", { required: true })}
                  className="mt-1 w-full border-0 rounded-md border-gray-200 focus:outline-2 px-3 bg-slate-100 focus:outline-slate-400 text-sm text-gray-700 py-3 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  {...register("last_name", { required: true })}
                  className="mt-1 w-full border-0 rounded-md border-gray-200 focus:outline-2 px-3 bg-slate-100 focus:outline-slate-400 text-sm text-gray-700 py-3 shadow-sm"
                />
              </div>
              <div className="col-span-6 w-full ">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700 mb-2 w-full"
                >
                  Upload Image
                </label>

                <input
                  type="file"
                  name="image"
                  {...register("image", { required: true })}
                  className="file-input file-input-bordered file-input-success w-auto lg:w-full"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="Email"
                  {...register("email", { required: true })}
                  name="email"
                  className="mt-1 w-full border-0 rounded-md border-gray-200 focus:outline-2 px-3 bg-slate-100 focus:outline-slate-400 text-sm text-gray-700 py-3 shadow-sm"
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                  })}
                  className="mt-1 px-3 w-full border-0 rounded-md border-gray-200 focus:outline-2  bg-slate-100 focus:outline-slate-400 text-sm text-gray-700 py-3 shadow-sm"
                />
                {errors.password?.type === "required" && (
                  <p className="text-sm text-error">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-sm text-error">minimum 6 character</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-sm text-error">
                    must have at least one lower & uppercase, one number and one
                    special charcters
                  </p>
                )}
                <span
                  onClick={() => setShowPassord(!showPassword)}
                  className=" cursor-pointer top-[55%] right-6 flex my-2 items-center w-fit"
                >
                  {showPassword ? (
                    <MdOutlineCheckBox className="text-2xl mr-2" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="text-2xl mr-2" />
                  )}
                  Show Password
                </span>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className=" button-79"
                >
                  Sign Up
                </button>
              </div>
              <div className="col-span-4">
                <p className="mt-4 text-base text-gray-500 sm:mt-0 ">
                  Already an user ?
                  <Link
                    to={"/login"}
                    className="text-primary font-semibold underline  hover:scale-125 transition pl-2"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
            <div className="my-10">

            <SocialLogin/>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Register;
