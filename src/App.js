import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { combineAction } from "./store/action/index";
import "./App.css";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";

function App() {
  // UseState
  const [count, handleCount] = useState(0);
  const [show, handleshow] = useState(false);
  const [textVal, handleTextVal] = useState("this is initial text");
  const [type, handleType] = useState("");
  const [val, handleVal] = useState({});

  //Redux hooks(useSelector/useDispatch)
  const dispatch = useDispatch();
  const gamesValue = useSelector((state) => state.games.gamesName);
  const gamesYear = useSelector((state) => state.games.yearOfLaunch);

  const { gamesHandle, gamesYearOfLaunch } = bindActionCreators(
    combineAction,
    dispatch
  );

  //useReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { countVal: state.countVal + 1 };
      case "Decrement":
        return { countVal: state.countVal - 1 };
      default:
        return state;
    }
  };

  const [state, dispatchVal] = useReducer(reducer, {
    countVal: 0,
    showVal: false,
  });

  //useEffect(whenever page renders)
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/games/")
      .then((resp) => handleVal(resp.data));
    console.log("api is called");
  }, []);

  useEffect(() => {
    gamesHandle("call of duty");
    gamesYearOfLaunch("2021");
    console.log("useState is called");
  }, []);

  //useRef

  const handleText = (event) => {
    let newVal = event.target.value;
    handleTextVal(newVal);
  };

  return (
    <div className="App">
      <div>Welcome to React</div>
      <div>{state.countVal}</div>
      <button
        onClick={() => {
          dispatchVal({
            type: "INCREMENT",
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatchVal({
            type: "Decrement",
          });
        }}
      >
        Decrement
      </button>
      <button onClick={() => handleshow(true)}>Show</button>
      <button onClick={() => handleshow(false)}>Hide</button>
      <div>
        <input
          type="text"
          placeholder="please enter something"
          onChange={handleText}
          // defaultValue={textVal}
          defaultValue={textVal}
        />
        <div>{textVal}</div>
      </div>
      {show && <div>This is show text</div>}
      <div>{type}</div>
    </div>
  );
}

export default App;
