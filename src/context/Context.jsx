import { createContext, useState } from 'react';
import runChat from '../Config/Gemini';

export const Context = createContext();

const ContextProvider = (props) => {
  const delayParams = (i, nextWords) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWords);
    }, 75 * i);
  };

  const onSent = async (prompt) => {
    setResultData('');
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    // await runChat(input);
    const response = await runChat(input);

    let responseArray = response.split('**');
    let newResponse;
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += '<b>' + responseArray[i] + '</b>';
      }
    }

    let newResponseTidying = newResponse.split('*').join('</br>');

    let newResponseArray = newResponseTidying.split(' ');
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWords = newResponseArray[i];
      delayParams(i, nextWords + ' ');
    }

    // setResultData(newResponseTidying);
    setLoading(false);
    setInput('');
  };

  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [prevPrompt, setPrevPromt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const contextValue = {
    prevPrompt,
    setPrevPromt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
