import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SimpleCounter from './components/SimpleCounter';

//let counter = 0;
let number = 985675;



setInterval(() => {
    const squareSix = Math.floor(number / 100000)
    const squareFive = Math.floor(number / 10000);
    const squareFour = Math.floor(number / 1000);
    const squareThree = Math.floor(number / 100);
    const squareTwo = Math.floor(number / 10);
    const squareOne = Math.floor(number / 1);

    function resetCounter (number){
      
    }
    //counter++;
    number--;
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
       <SimpleCounter numberOne={squareOne} numberTwo={squareTwo} numberThree={squareThree} numberFour={squareFour} numberFive = {squareFive} numberSix = {squareSix} />
      </React.StrictMode>,
    )
}, 1000);



