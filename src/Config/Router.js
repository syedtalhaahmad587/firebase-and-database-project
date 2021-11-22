import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../Container/Dashboard";
import Login from "../Container/Login";
import Signup from "../Container/Signup";

function AppRouter() {
  return (
    <Router>
      <div>
       <Routes>
           <Route path="/Dashboard" element={<Dashboard/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/signup/" element={<Signup/>} />
           <Route path="" element={<Login/>} />
       </Routes>       
       </div>
    </Router>
  );
}
export default  AppRouter;

