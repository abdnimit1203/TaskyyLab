import { Link } from "react-router-dom";
import { IoLogInSharp } from "react-icons/io5";
import "./buttons.css"
const LoginButton = () => {
  return (
    <div>
      <Link to={'/login'} className="font-bold button-77 lg:p-10">
        <span className="">Login </span><IoLogInSharp className="inline text-xl" />
      </Link>
    </div>
  );
};

export default LoginButton;
