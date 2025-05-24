import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [type, setType] = useState("e");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    try {
      // Replace this URL with your actual API endpoint
      const response = await axios.get(`https://api.example.com/data?type=${type}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <button onClick={handleFetch} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
        {data && (
          <pre style={{ textAlign: 'left', maxWidth: 600, margin: '1rem auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </header>
    </div>
  );
}

export default App;
