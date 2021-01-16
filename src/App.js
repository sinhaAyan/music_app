import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getToken } from './spotify';

function App() {

  useEffect(() => {
    const token = getToken();
    console.log('Token>>>>', token);
  }, []);
  return (
    <div className="App">
      <h1>spotify clone</h1>
      <Login />
    </div>
  );
}

export default App;
