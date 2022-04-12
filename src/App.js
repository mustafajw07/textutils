import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark')
    }else{
      setmode('light')
    }
  }

  return (
    <>
    <Router >
    <Navbar title='TextUtils' about='About' mode={mode} toggleMode={toggleMode}/>
  <div className="container">
 

  <Routes>
      <Route path="/" caseSensitive={false} element={<TextForm heading ='Enter your text below'/>} />
        <Route path="/about" caseSensitive={false} element={<About />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
