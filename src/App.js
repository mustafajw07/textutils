import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

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
    <Navbar title='TextUtils' about='About' mode={mode} toggleMode={toggleMode}/>
    <TextForm heading ='Enter your text below'/>
    </>
  );
}

export default App;
