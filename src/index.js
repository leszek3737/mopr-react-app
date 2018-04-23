import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Step1 from './Components/Step1';

window.__data__ = {
    dps: [{
            id: 0,
            koszt: 4000,
            name: "DPS 1",
        },
        {
            id: 1,
            koszt: 3900,
            name: "DPS 2",
        },
        {
            id: 2,
            koszt: 3900,
            name: "DPS 3",
        }
    ],
    incomeCriterion: {
        alone: 1902,
        family: 1542
    },
    numberKinshipDegrees: 4, // -1 
    kinshipDegree: [{
            id: 0,
            name: "Małżonek",
            mustBeUnique: true,
        },
        {
            id: 1,
            name: "Dziecko",
            mustBeUnique: false,

        },
        {
            id: 2,
            name: "Wnuk",
            mustBeUnique: false,
        },
        {
            id: 3,
            name: "Rodzic",
            mustBeUnique: false,

        },
        {
            id: 4,
            name: "Dziadki",
            mustBeUnique: false,
        },
    ],
}

let renderApp = (
<section className="box">
    {/* <Step1 dpsList={dpsList} button={button} legend="Wybierz dom pomocy społecznej"/> */}
</section>
)

ReactDOM.render(<App renderApp={renderApp} />, document.getElementById('root'));
// ReactDOM.render(<Step1 dpsList={dpsList} button={button} legend="Wybierz dom pomocy społecznej" />, document.querySelector('.box'));
registerServiceWorker();
