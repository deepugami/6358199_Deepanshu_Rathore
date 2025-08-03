import { useState } from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  const toggleFlag = () => {
    setFlag(!flag);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cricket Application</h1>
        <button onClick={toggleFlag} className="toggle-btn">
          Switch to {flag ? 'Indian Players' : 'List of Players'}
        </button>
      </header>
      <main>
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </main>
    </div>
  );
}

export default App;
