import React from 'react';
import ReactDOM from 'react-dom/client';
// import Newsmain from './Newsmain';//component-4
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Newscore from './Newscore';////component-6
// import Main from './Component1/Main';
import MainNews from './Mainnews'//component-5

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Main/> */}

    {/* <Newsmain/> */}

    <MainNews/>

{/* <Newscore/> */}
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
