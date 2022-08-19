import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Appointment from "./pages/Appointment";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
