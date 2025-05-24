import React, { useState } from 'react';   // fixed import syntax
import axios from 'axios';

function App() {
  const [type, setType] = useState("e");           // use camelCase for variables
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);   // fixed typo useState

  const handleFetch = async () => {
    setLoading(true);    // set loading to true when starting fetch
    try {
      // Example API call — replace URL with your actual API endpoint
      const response = await axios.get(`https://api.example.com/data?type=${type}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setLoading(false);  // set loading to false after fetch completes
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Assuming logo is imported or replace with your image */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <p>Edit <code>src/App.js</code> and save to reload.</p>

        {/* Button to trigger fetch */}
        <button onClick={handleFetch} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>

        {/* Display fetched data */}
        {data && (
          <pre style={{ textAlign: 'left', maxWidth: 600, margin: '1rem auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}

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
