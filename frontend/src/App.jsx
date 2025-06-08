import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NovaReceita from './pages/NovaReceita';
import EditarReceita from './pages/EditarReceita';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nova-receita" element={<NovaReceita />} />
            <Route path="/editar/:id" element={<EditarReceita />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;