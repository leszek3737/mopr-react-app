import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Step1 from "./Components/Step1"
import Step2 from "./Components/Step2"

window.__data__ = {
  dps: [
    {
      id: 0,
      koszt: 4000,
      name: "DPS 1"
    }, {
      id: 1,
      koszt: 3900,
      name: "DPS 2"
    }, {
      id: 2,
      koszt: 3900,
      name: "DPS 3"
    }
  ],
  incomeCriterion: {
    alone: 1902,
    family: 1542
  },
  numberKinshipDegrees: 4, // -1
  kinshipDegree: [
    {
      id: 0,
      name: "Małżonek",
      mustBeUnique: true
    }, {
      id: 1,
      name: "Dziecko",
      mustBeUnique: false
    }, {
      id: 2,
      name: "Wnuk",
      mustBeUnique: false
    }, {
      id: 3,
      name: "Rodzic",
      mustBeUnique: false
    }, {
      id: 4,
      name: "Dziadki",
      mustBeUnique: false
    }
  ],
  odp: {
    cost: {
      dps: 0,
      mieszkaniec: 0,
      gminy: 0
    },
    licz: 0,
    rodzi: [], // rodzaj rodziny pobrany z pola
    odplRo: [], // odpłatność dansej rodziny
    iloscRo: [], // ilość osób w danej rodzinie
    rod: [], //odpłatnośc na wszyskich poziomach (pobrane odpRo)
    licznik: [], // ilość rodzin w poszczegulnych grupach
  }
}
window.app = {
  view: {
    start: () => {
      const step = (
        <section className="box">
          <Step1/>
        </section>
      );
      return ReactDOM.render(
        <App step={step}/>, document.querySelector("#root"));
    },

    step2: () => {
      const step = (
        <section className="box">
          <Step2 />
        </section>
      );
      return ReactDOM.render(
        <App step={step}/>, document.querySelector("#root"));
    }
  }
}
window
  .app
  .view
  .start()
registerServiceWorker();
