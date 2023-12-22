import Lottie from "lottie-react";
import contactlottie from "../../assets/contactlottie.json";
import "./contact.css";
const ContanctUs = () => {
  return (
    <div className="p-6 lg:p-10 lg:py-16 flex flex-col  gap-6  bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl my-4">
      <h2 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 text-center  to-pink-600 border-b-4 w-fit mx-auto border-purple-400 pb-6 hover:scale-110 transition  duration-200">
        Connect with us
      </h2>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12 flip-div ">
            <Lottie animationData={contactlottie} loop={true} />
          </div>

          <div className="rounded-lg p-8 shadow-md border lg:col-span-3 lg:p-12 hover:scale-95 transition duration-500 shadow-sky-100 glass bg-purple-200">
            <form action="" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="3"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className=" button-79"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContanctUs;
