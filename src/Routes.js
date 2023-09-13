// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TechnicalWriteup from './components/TechnicalWriteup';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/technical-writeup" element={<TechnicalWriteup />} />
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
