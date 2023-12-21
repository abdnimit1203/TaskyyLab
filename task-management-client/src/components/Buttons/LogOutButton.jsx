import { MdLogout } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const LogOutButton = () => {
    const {logOut} = useAuth()

const handleLogOut=()=>{
    logOut().then(
        toast("User has been logged out", {
          icon: <MdLogout />,
          style: {
            background: "#ff92b4",
          },
        })
      );
}
    return (
        <div >
            <button onClick={handleLogOut} className="button-77 ">
            Log out
            </button>
        </div>
    );
};

export default LogOutButton;