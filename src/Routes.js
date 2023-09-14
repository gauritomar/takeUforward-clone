// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TechnicalWriteup from './components/TechnicalWriteup';
import Intro from './components/Intro';
import JsonSupport from './components/JsonSupport';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Set the default route to /technical-writeup */}
                    <Route index element={<TechnicalWriteup />} />
                    <Route path="/technical-writeup" element={<TechnicalWriteup />} />
                    <Route path="/why-me" element={<Intro />} />
                    <Route path="/json-support" element={<JsonSupport />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
