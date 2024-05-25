import { useContext, useState } from "react";
import { assets } from "../assets 2/assets";
import { Context } from "../context/Context";

function SideBard() {
  const [click, setClick] = useState(false);
  const { prePrompt, Onsent, setRecentPrompt,newChat } = useContext(Context);
  const onload = async (prompt) => {
    await setRecentPrompt(prompt);
    await Onsent(prompt);
    // console.log(prompt)
  };


 
  return (
    <>
      <div
        className={`sidebar hidden  h-screen  md:inline-flex ${
          click ? "w-60" : null
        } flex-col justify-between bg-card  px-2.5 py-7`}
      >
        <div className="top">
          <img
            className="menu block ms-2.5 cursor-pointer w-6"
            src={assets.menu_icon}
            alt="menu"
            onClick={() => setClick((prev) => !prev)}
          />
          <div
            className={`new-chat mt-12 inline-flex cursor-pointer items-center gap-2.5 px-5 py-4  bg-hover text-sm rounded-full text-grey-400 text-slate-500`}
          >
            <img onClick={()=>newChat()} className="w-6" src={assets.plus_icon} alt="" />
            {click && <p className="text-base text-normal">new chat</p>}
          </div>

          {click ? (
            <div className="recent flex flex-col">
              <p
                className={` ms-2.5  my-8 text-base ${
                  click ? "block" : "hidden"
                }`}
              >
                Recent
              </p>
              {prePrompt &&
                prePrompt.map((item, index) => (
                  <div
                    onClick={() => onload(item)}
                    key={index}
                    className={`recent-entry flex items-start gap-2.5 p-5 pe-5 rounded-full cursor-pointer hover:bg-hover`}
                  >
                    <img className="w-6" src={assets.message_icon} alt="" />
                    <p className="text-base text-tittle">{item}...</p>
                  </div>
                ))}
            </div>
          ) : null}
        </div>

        <div className="bottom flex flex-col gap-4">
          <div className="bottom-item  items-center flex gap-2.5 p-5 pe-5 rounded-full cursor-pointer hover:bg-hover">
            <img className="w-6" src={assets.question_icon} alt="" />
            {click && <p className="text-base text-tittle">Help</p>}
          </div>
          <div className="bottom-item flex items-center gap-2.5 p-5 pe-5 rounded-full cursor-pointer hover:bg-hover">
            <img className="w-6" src={assets.history_icon} alt="" />
            {click && <p className="text-base text-tittle">History</p>}
          </div>
          <div className="bottom-item  items-center flex gap-2.5 p-5 pe-5 rounded-full cursor-pointer hover:bg-hover">
            <img className="w-6" src={assets.send_icon} alt="" />
            {click && <p className="text-base text-tittle">Setting</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBard;
