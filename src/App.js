import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import {bindActionCreators} from 'redux';
import {combineAction} from './store/action/index'
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
 
  const dispatch = useDispatch();
  const gamesValue = useSelector((state) => state.games.gamesName);
  const gamesYear = useSelector((state) => state.games.yearOfLaunch) 
  console.log('incoming value is ', gamesValue, gamesYear)
  const {gamesHandle, gamesYearOfLaunch}  = bindActionCreators(combineAction, dispatch);

  useEffect(()=> {
   axios.get('http://127.0.0.1:8000/api/v1/games/').then(resp => console.log(resp.data))
  })

  useEffect(()=> {
    gamesHandle('call of duty')
    gamesYearOfLaunch('2021')
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
