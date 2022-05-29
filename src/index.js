import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {stores, persistor} from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import {Practise} from './components/practise';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Loading() {
  return <div>Loading</div>;
}

root.render(
  <Provider store={stores}>
    <PersistGate loading={<Loading />} persistor={persistor}>
    <Practise/> 
    <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
