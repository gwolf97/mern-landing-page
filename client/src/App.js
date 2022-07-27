import React from "react"
import LandingScreen from "./screens/LandingScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Redirect from "./screens/Redirect";


function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Redirect/>}/>
      <Route path="/home" element={<LandingScreen/>}/>
      <Route path="/home/:id" element={<ThankYouScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
