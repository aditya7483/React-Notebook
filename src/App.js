import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Register from "./components/Register";
import {useState} from 'react'


function App() {
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({msg:message,type:type})
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route  path="/" element={<Home showAlert={showAlert} />}/>
          <Route  path="/about" element={ <About />}/>
          <Route  path="/login" element={ <Login showAlert={showAlert} />}/>
          <Route  path="/register" element={ <Register showAlert={showAlert}/>}/>
        </Routes>
        </div>
      </Router>
      
      </NoteState>
    </>
  );
}

export default App;
