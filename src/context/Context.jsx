import { createContext } from 'react';
import runChat from '../Config/Gemini';

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await runChat(prompt);
  };

  onSent('what is google');

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;

// import runChat from '../Config/Gemini';

// console.log('runChat:', runChat); // apakah ini function atau undefined?

// const ContextProvider = (props) => {
//   const onSent = async (prompt) => {
//     await runChat(prompt);
//   };

//   onSent('what is google');

//   const contextValue = {};

//   return (
//     <Context.Provider value={contextValue}>{props.children}</Context.Provider>
//   );
// };

// export default ContextProvider;
