import { useRef, useLayoutEffect, useEffect, useState, useContext, createContext, useMemo } from "react";
import ReceivedName from './name';

import "../App.css";

//contextApi
export const PractiseContext = createContext(null)

export const Practise = () => {
  const filename = "practise";

  //useState
  const [input, handleInput] = useState('');
  const [val, handleVal] = useState(0);

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

  const powerOfValue = (value) => {
     let computation = value ** value;
     return computation;
  }

  //useMemo
  const computedValue = useMemo(() => powerOfValue(val), [val] )
  console.log('computed value is ', computedValue)

  const buttonClick = () => {
    let name = inputRef.current.value;
     handleInput(name)
    inputRef.current.focus();
  };

  const buttclearBtnonClick = () => {
    inputRef.current.value = "";
  };

  const changeName = (inputVal) => {
     let numVal = inputVal.target.value;
     handleVal(numVal)
  }

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
      <input type='number' placeholder="enter number" onChange={changeName}/>
       <div>{computedValue}</div>
    </div>
  );
};