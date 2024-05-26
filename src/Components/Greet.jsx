// Corrected styles
const textColorGradientToR = {
    background: "linear-gradient(to right, #3b82f6, #ef4444)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  
  const loader = {
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#f6f7f8",
    background: "linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff)",
    backgroundSize: "800px 50px",
    height: "20px",
    animation: "loader 3s infinite linear",
  };
  
  // Keyframes for loader animation
  const keyframesLoader = `
    @keyframes loader {
      0% {
        background-position: -800px 0;
      }
      100% {
        background-position: 800px 0;
      }
    }
  `;
  
  // Import necessary modules and context
  import { useContext } from "react";
  import { assets } from "../assets 2/assets";
  import { constants } from "./consts";
  import { Context } from "../context/Context";
  
  function Greet() {
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          Onsent(input);
        }
      };
    const {
      Onsent,
      prePrompt,
      setPrePrompt,
      recentPrompt,
      setRecentPrompt,
      showResult,
      setResult,
      setResultData,
      loading,
      setLoading,
      resultData,
      input,
      setInput,
    } = useContext(Context);
  
    return (
      <div className="wrapper  px-4 p-0 md:p-5 lg:p-5 w-full md:w-128 lg:w-128 mx-auto my-0 md:my-12 lg:my-12 ">
        {!showResult ? (
          <>
            <div className="greet w-auto md:w-128 lg:w-128 mx-auto my-0 md:my-12 py-3 md:py-5 text-title">
              <p className="font-medium text-5xl pt-2">
                <span style={textColorGradientToR}>Hello, Prem.</span>
              </p>
              <p className="font-medium text-5xl pt-2">How can I help you today?</p>
            </div>
            <div className="Cards overflow-y-auto  grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
              {constants.map((item) => (
                <div
                  key={item.id}
                  className="card h-200 bg-hover hover:bg-hoover active:bg-actiive p-5 cursor-pointer relative rounded-2xl w-full md:w-auto lg:w-full"
                >
                  <p className="text-normal">{item.title}</p>
                  <div className="absolute w-15 right-3 bottom-3 rounded-full flex justify-center items-center">
                    <img
                      className="text-base bg-white w-11 p-2 rounded-full"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="wrapper w-auto md:w-128 mx-auto my-12">
            <div className="resultTitle flex gap-5 items-center mb-5">
              <img className="rounded-full w-12" src={assets.user_icon} alt="User Icon" />
              <p className=" text-lg">{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-4 ">
              <img className="rounded-full w-12" src={assets.gemini_icon} alt="Gemini Icon" />
              {loading ? (
                <div className="loading flex flex-col w-full gap-3 mt-5">
                  <hr style={loader} />
                  <hr style={loader} />
                  <hr style={loader} />
                </div>
              ) : (
                <p className="pt-2 overflow-auto  font-normal text-lg leading-loose h-201 p-4 " dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
  
        <div className="bottom-searchBar absolute bottom-0 px-5 m-auto bg-white">
          <div className="searchBox w-full md:w-128 lg:w-128 flex flex-row items-center my-10 bg-card justify-between gap-4 py-4 px-5 rounded-full">
            <input
              type="text"
              className="flex flex-1 bg-transparent border-none p-2 outline-none text-base"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="flex flex-row items-center justify-center md:gap-4  lg:gap-4">
              <img className="w-7 cursor-pointer" src={assets.gallery_icon} alt="Gallery Icon" />
              <img className="w-7 cursor-pointer" src={assets.mic_icon} alt="Mic Icon" />
              <img className="w-7 cursor-pointer" onClick={() => Onsent(input)} src={assets.send_icon} alt="Send Icon" />
            </div>
          </div>
          <p className="bg-white text-sm my-5 text-center text-normal">
            Gemini may display inaccurate info, including about people, so double-check its responses.
            <span>
              {" "}
              <u className="cursor-pointer">Your privacy and Gemini Apps</u>
            </span>
          </p>
        </div>
      </div>
    );
  }
  
  // Adding keyframes to the document's head
  document.head.insertAdjacentHTML("beforeend", `<style>${keyframesLoader}</style>`);
  
  export default Greet;
  