import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function showTime()
{
const elem = (
     <div>
       
      <h1>  Time is {new Date().toLocaleTimeString()}</h1>
      <h1>Something</h1>
         
       
     </div>

);
ReactDOM.render(
   elem,

  document.getElementById('root')
);
}


setInterval(showTime,1000)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
