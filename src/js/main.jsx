import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SimpleCounter from './components/SimpleCounter';

let counter = 0;
let control;
let number = 985675;
let contadorDown = false;





function timeControl() {

 
  //const valorIntroducido = document.querySelector('input[aria-label="number"]')?.value;
  //const numberStop = parseInt(valorIntroducido);



  control = setInterval(() => {

    if (!contadorDown) {
      counter++;
    } else {
      counter--;
    }
   // if (counter === numberStop) {
     // alert(`¡Has llegado al tiempo ${numberStop}!`);
    //}




    const squareSix = Math.floor(counter / 100000)
    const squareFive = Math.floor(counter / 10000);
    const squareFour = Math.floor(counter / 1000);
    const squareThree = Math.floor(counter / 100);
    const squareTwo = Math.floor(counter / 10);
    const squareOne = Math.floor(counter / 1);


    

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <SimpleCounter
          numberOne={squareOne}
          numberTwo={squareTwo}
          numberThree={squareThree}
          numberFour={squareFour}
          numberFive={squareFive}
          numberSix={squareSix}
          pauseCounter={() => {
            clearInterval(control);
          }}
          continueCounter={timeControl}
          resetCounter={() => {
            counter = 0;
            clearInterval(control);
            contadorDown=false;
            timeControl();
          }}
          reduceCounter={() => {
            clearInterval(control)
            counter = number;
            contadorDown=true;
            timeControl();
          }}
        />
      </React.StrictMode>,
    );
  }, 1000);
}

timeControl();



