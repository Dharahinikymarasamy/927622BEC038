import React {useState} 'react';
import axios from 'axios';

function App() {
  const [Type, setType] = useState("e");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useSate(false);
  const handleFetch = async () => {
    setLoading
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
