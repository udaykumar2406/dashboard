import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import {BrowserRouter as Router, } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Dashboard/>
      </Router>
    </div>
  );
}

export default App;
