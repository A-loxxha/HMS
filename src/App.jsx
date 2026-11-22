import Home from "./pages/Home";
import "./App.css"
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";

export default function App(){

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}