import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message='hello'/>
        <div className="container">
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/about" element={ <About />}/>
          <Route  path="/login" element={ <Login />}/>
          <Route  path="/register" element={ <Register/>}/>
        </Routes>
        </div>
      </Router>
      
      </NoteState>
    </>
  );
}

export default App;
