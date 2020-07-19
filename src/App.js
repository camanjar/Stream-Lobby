import React from 'react';
import './App.css';

import Splashpage from './components/welcomepage'

class App extends React.Component {
  render() { 
    return (
    <div className="App">
      <Splashpage/>
    </div>
    )
  } 
}

export default App;
