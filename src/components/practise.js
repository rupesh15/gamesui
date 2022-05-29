import { useRef, useLayoutEffect, useEffect, useState, useContext, createContext } from "react";
import ReceivedName from './name';

import "../App.css";

//contextApi
export const PractiseContext = createContext(null)

export const Practise = () => {
  const filename = "practise";

  //useState
  const [input, handleInput] = useState('');

  //useRef(manupulate dom element)
  const inputRef = useRef(null);

  //useEffect
  useEffect(() => {
    console.log("inside use effect");
  },[]);

  //useLayoutEffect
  useLayoutEffect(() => {
    console.log("inside uselayout effect");
  },[]);

  const buttonClick = () => {
    let name = inputRef.current.value;
     handleInput(name)
    inputRef.current.focus();
  };

  const buttclearBtnonClick = () => {
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <h1>Sample</h1>
      <input type="text" placeholder="enter something" ref={inputRef} />
      <button onClick={buttonClick}>Change name</button>
      <button onClick={buttclearBtnonClick}>Clear</button>
      <div>{input}</div>
     <PractiseContext.Provider value = {{input,filename}}>
      <ReceivedName/>
     </PractiseContext.Provider>
    </div>
  );
};