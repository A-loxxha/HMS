import Home from "./mainPages/Home";
import "./App.css"
import { Routes, Route } from "react-router";
import Dashboard from "./mainPages/Dashboard";
import Patients from "./dashboardPages/Patients";

export default function App(){

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/patients" element={<Patients/>}/>
      </Routes>
    </div>
  )
}