import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render(renderApp=this.props.renderApp) {
    return renderApp;
  }
  static nextStep(begin = ".step1" , target = ".step2") {
    console.log(begin, target);
    
      
  }
}

export default App;
