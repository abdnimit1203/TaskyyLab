import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const { googleSignIn } = useAuth
    ();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic
  ();

  const handleGoogleSignIn = async() => {
    const toastId2 = toast.loading("signing in...");
    try{

    
   await googleSignIn()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
          role: "user",
        };

        axiosPublic.post("/api/v1/users", userInfo).then((res) => {
            if (res.data?.insertedId) {
                console.log("user added to the database");
                
              }
          
        });
        toast.success(
            "user signed in successfully!",

            { id: toastId2 }
          );

          navigate(location?.state || "/dashboard");
      }
      
      )
      .catch((err) => {
        console.log(err.message);
      })
    }catch(err){
        toast.error(err.message, { id: toastId2 });
      }
  };
    return (
        <div>
           <Link>
           <button onClick={handleGoogleSignIn} className="btn uppercase hover:bg-lime-200 bg-white text-success border-success">
             <img src="https://i.ibb.co/sv33Tts/google.png" alt="gg" className="w-12 inline" />Log in with Google
           </button>
           </Link> 
        </div>
    );
};

export default SocialLogin;