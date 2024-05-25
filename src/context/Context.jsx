import { createContext, useState } from "react";
import run from "../Components/gemini";

// Create a context
export const Context = createContext();

// Create a context provider component
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prePrompt, setPrePrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayParah = (index, newWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + newWord + " ");
    }, 75 * index);
  };

  const newChat = ()=>{
    setShowResult(false)
    setLoading(false)
  }
  // Define the context value
  const Onsent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;

    if (prompt !== "") {
        // setPrePrompt((prev) => [...prev, prompt]);
        setPrePrompt((prev) => [...prev, input]);
//    console.log(input)
        setRecentPrompt(input);
        response = await run(input)
    //   setPrePrompt((prev) => [...prev, prompt]);
     
    } else {
        response = await run(prompt)
        setRecentPrompt(prompt);
       
    //   
    }

    try {
      response = await run(prompt || input);
      let responseArray = response.split("**");
      let newResponse = "";

      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }

      let newResponse2 = newResponse.split("*").join(" </br> ");
      const newResponseArrayData = newResponse2.split(" ");

      for (let i = 0; i < newResponseArrayData.length; i++) {
        const nextWord = newResponseArrayData[i];
        delayParah(i, nextWord);
      }
    } catch (error) {
      setResultData("An error occurred while processing your request.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    Onsent,
    prePrompt,
    setPrePrompt,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowResult,
    setResultData,
    loading,
    setLoading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
