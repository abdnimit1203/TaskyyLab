import Lottie from "lottie-react";
import developer from "../../assets/developer.json";
import banker from "../../assets/banker.json";
import Entrepreneurs from "../../assets/Entrepreneurs.json";
import marketing from "../../assets/marketing.json";
const Benefits = () => {

 
  return (
    <div className="p-6 lg:p-10 lg:py-16 flex flex-col  gap-6  bg-gradient-to-r to-orange-100 from-pink-100 rounded-xl my-4">
      <h2 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 text-center  to-pink-600 border-b-4 w-fit mx-auto border-purple-400 pb-6 hover:scale-110 transition  duration-200">
        Who Benefits from Our Platform?
      </h2>

      <h3 className="font-semibold">
        {" "}
        Discover how our task management website caters to the diverse needs of
        professionals across various industries:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  

        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ">
          <div className="rounded-[10px] bg-white p-4  sm:p-6 h-full">
        
            
          <Lottie animationData={developer} loop={true} className="aspect-video bg-cover" />
           

            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              Developers 🚀
            </h3>
            <p>
              Our platform is tailored to meet the unique demands of coding and
              project management.
            </p>
          </div>
        </article>
       
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ">
          <div className="rounded-[10px] bg-white p-4  sm:p-6 h-full">
        
          <Lottie animationData={banker} loop={true} className="aspect-video bg-cover" />

            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Bankers 💼
            </h3>
            <p>
            Our platform provides the tools necessary for meticulous task management
        in the banking sector.
            </p>
          </div>
        </article>
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ">
          <div className="rounded-[10px] bg-white p-4  sm:p-6 h-full ">
        
          <Lottie animationData={Entrepreneurs} loop={true} className="aspect-video bg-cover" />

            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Entrepreneurs 🚀
            </h3>
            <p>
            Empower yourself to achieve your entrepreneurial goals with streamlined
        task management.
            </p>
          </div>
        </article>
        <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] ">
          <div className="rounded-[10px] bg-white p-4  sm:p-6 h-full">
        
          <Lottie animationData={marketing} loop={true} className="aspect-video bg-cover" />

            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Marketing Maestros 📈
            </h3>
            <p>
            Our platform supports marketing professionals in coordinating tasks to elevate your brands
            </p>
          </div>
        </article>

      </div>
     
    </div>
  );
};

export default Benefits;
