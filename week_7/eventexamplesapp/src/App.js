import React from 'react';
import './App.css';
import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import SyntheticEvent from './components/SyntheticEvent';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>
      <div className="section">
        <Counter />
      </div>
      <div className="section">
        <WelcomeButton />
      </div>
      <div className="section">
        <SyntheticEvent />
      </div>
      <div className="section">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
