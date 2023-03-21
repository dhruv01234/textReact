import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from "react";
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState("light");
  const [bgclr,changebgclr] = useState("white");
    const [txtclr,changetxtclr] = useState("black");
  const toggleMode = ()=>{
    if(mode==="light"){
      setmode("dark");
      changebgclr("black");
      changetxtclr("white");
      document.body.style.backgroundColor = "grey";
    }
    else{
      setmode("light");
      changebgclr("white");
      changetxtclr("black");
      document.body.style.backgroundColor = "white"
    }
  };
  return (
    <>
    {/* <Router> */}
<Navbar title="MyApp" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
  
  {/* <Routes> */}
    {/* <Route path='/' element={ */}
    <TextForm heading="Analyze your text" bgclr={bgclr} txtclr={txtclr}/>
    {/* }
    /> */}
    {/* <Route path='/about' element={
      <About/>  
  }
    /> */}
  {/* </Routes> */}
</div>
    {/* </Router> */}
    </>
  );
}

export default App;
