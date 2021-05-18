import { useState } from 'react';

import './App.css';

function App() {
  const [message, setMessage] = useState('...');

  const HelloServer = () => {
    fetch('http://localhost:4000')
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          setMessage(data.message);
        }
        
        console.log(data);
      });
  }

  return (
    <div>
      <p>
        Hello Client!
      </p>
      <p>
        {message}
      </p>
      <button onClick={HelloServer}>Click Me</button>
    </div>
  );
}

export default App;
