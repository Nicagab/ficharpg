import './App.css';
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from './components/layout/navbar/navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<h1>Home Page</h1>}/>
      <Route path="/ficha" element={<h1>Ficha</h1>}/>
    </Routes>
    </>
  );
}

export default App;
