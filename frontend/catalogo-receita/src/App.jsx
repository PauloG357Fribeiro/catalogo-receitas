import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import NovaReceita from './pages/NovaReceita';
import EditarReceita from './pages/EditarReceita';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nova" element={<NovaReceita />} />
          <Route path="/editar/:id" element={<EditarReceita />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;