import { BsChatSquareDots } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import { FaCirclePlus } from "react-icons/fa6";

const Chats = () => {
    return (
       <>
       <div className="bg-[url('https://i.ibb.co/ZcWL28v/register-bg.jpg')] h-[100px] flex justify-center items-center text-white rounded-xl transition hover:scale-95 duration-150 delay-150">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        {" "}
        <BsChatSquareDots className="inline" />
        Chats
      </h2>
    </div>
    {/* chats */}
    <div className="bg-rose-100 rounded-xl my-10 p-3 lg:p-6">
    <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I hate you!</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">I love you!</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>
<div className="join w-[90%] mx-auto my-4">
    <div>
        <button className="btn join-item btn-accent text-white text-xl"><FaCirclePlus />
</button>
    </div>
  <div className=" w-full ">
    
      <input className="input input-bordered join-item w-full " placeholder="Search"/>
    
  </div>
 
  <div className="indicator">
   
    <button className="btn join-item btn-primary text-white text-xl"><VscSend />
</button>
  </div>
</div>
    </div>
       </>
    );
};

export default Chats;