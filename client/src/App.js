import React from "react"
import LandingScreen from "./screens/LandingScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/home" element={<LandingScreen/>}/>
      <Route path="/:id" element={<ThankYouScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
