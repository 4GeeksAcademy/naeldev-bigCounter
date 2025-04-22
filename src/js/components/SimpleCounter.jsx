import React from 'react';
import { CiClock2 } from "react-icons/ci";

function SimpleCounter({ numberSix,numberFive,numberFour, numberThree, numberTwo,
     numberOne,pauseCounter,continueCounter,resetCounter,reduceCounter,insertTime}) {
    return (
        <>
        <div className="counter ">
            <div className=" clock">
            <CiClock2 />
            </div>
            <div className='six'>{numberSix % 10}</div>
            <div className='five'>{numberFive % 10}</div>
            <div className="four">{numberFour % 10}</div>
            <div className="three">{numberThree % 10}</div>
            <div className="two">{numberTwo% 10}</div>
            <div className="one">{numberOne % 10}</div>
            <div className='d-flex justify-content-center'>
                <button onClick={pauseCounter} type="button" className="btn btn-danger mx-2">Pausar</button>
                <button onClick={continueCounter} type="button" className="btn btn-warning mx-2">Reanudar</button>
                <button onClick= {resetCounter} type="button" className="btn btn-success mx-2">Reiniciar</button>
                <button onClick={reduceCounter}  type="button" className="btn btn-primary mx-2">Decremento</button>
                
            </div>
            
        </div>
            
              
          
    </>
    );
}

export default SimpleCounter