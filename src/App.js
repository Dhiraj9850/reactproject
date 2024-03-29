import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  // using useState
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#001a33';
      showAlert("dark mode has been enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success")
    }

  }

  return (
    <>
      <Router>
      <Navbar title="Textutils.com" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container" mode={mode}>
     
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
        
          <Route exact path="/">
            <TextForm title="Enter your Text here to Analyze" mode={mode} />
          </Route>
        </Switch>

       
      </div>
      </Router>

    </>

  );
}

export default App;
