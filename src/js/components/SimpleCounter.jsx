import React from 'react';
import { CiClock2 } from "react-icons/ci";

function SimpleCounter({ numberSix,numberFive,numberFour, numberThree, numberTwo, numberOne }) {
    return (
        <div className="counter">
            <div className="clock">
            <CiClock2 />
            </div>
            <div className='six'>{numberSix % 10}</div>
            <div className='five'>{numberFive % 10}</div>
            <div className="four">{numberFour % 10}</div>
            <div className="three">{numberThree % 10}</div>
            <div className="two">{numberTwo% 10}</div>
            <div className="one">{numberOne % 10}</div>
            <div className="btn-group d-flex justify-content-center col-4" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Pausar</button>
                <button type="button" class="btn btn-primary">Reiniciar</button>
                <button type="button" class="btn btn-primary">Resumir</button>
            </div>
        </div>
    );
}

export default SimpleCounter