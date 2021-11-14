import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home.js';
import Main from "./Pages/Main.js";
import Result from "./Pages/Result.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/main/result" element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
