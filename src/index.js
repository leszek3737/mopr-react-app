import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Step1 from './Components/Step1';

const dpsList = [
    {
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
];
let button = {
    begin: "step1",
    target: "step2",
}
let renderApp = (
<section className="box">
    <Step1 dpsList={dpsList} button={button} legend="Wybierz dom pomocy społecznej"/>
</section>
)

ReactDOM.render(<App renderApp={renderApp} />, document.getElementById('root'));
// ReactDOM.render(<Step1 dpsList={dpsList} button={button} legend="Wybierz dom pomocy społecznej" />, document.querySelector('.box'));
registerServiceWorker();
