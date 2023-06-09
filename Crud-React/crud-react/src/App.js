import logo from './logo.svg';
import './App.css';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Create/>}/>
      <Route exact path="/read" element={<Read/>}/>
      <Route exact path="/update" element={<Update/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
