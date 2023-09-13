// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TechnicalWriteup from './components/TechnicalWriteup';
import Intro from './components/Intro';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/technical-writeup" element={<TechnicalWriteup />} />
                    <Route path="/why-me" element={<Intro />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
