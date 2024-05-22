// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Location from "./Components/Location";
import Events from "./Components/Events.jsx";
import Createevent from "./Components/Createevent.jsx"
import Createlocation from "./Components/createlocation.jsx";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Login from './Components/Login.jsx'
import Signup  from "./Components/Signup.jsx";
import NotFound from "./Components/NotFound.jsx"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createevent" element={<Createevent />} />
        <Route path="/createlocation" element={<Createlocation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup/>} />
         <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
