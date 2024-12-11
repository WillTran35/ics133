import './App.css'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import NutritionPage from './NutritionPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/NutritionPage" element={<NutritionPage/>} />
        </Routes>
      </Router>
  )
}
