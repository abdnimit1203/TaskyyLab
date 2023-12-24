import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="footer footer-center p-10 bg-gradient-to-r from-[#ffb56f] to-blue-100 text-slate-700">
      <aside>
      <div className="flex-1 px-2 mx-2 font-extrabold text-transparent text-xl sm:text-3xl bg-clip-text bg-gradient-to-r from-[#ff995f] to-[#facbcb]">
            <Link to={'/'}>
            <img src="/logo.PNG" alt="logo" className="w-32 border-b-2 border-red-500" />
            </Link>
          </div>
        <div className="flex-1 px-2 mx-2 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">TaskyyLab</div>
        <p className="font-bold">
         
          Your best task management site
        </p>
        <p>Copyright © {year} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-xl">
          <Link to={'https://www.facebook.com'} className="text-blue-500">
          <FaFacebook  />

          </Link>
          <Link to={'https://www.instagram.com'} className="text-purple-500">
          <FaInstagram />

          </Link>
          <Link to={'https://www.twitter.com'} className="text-sky-500">
          <FaTwitter />

          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
