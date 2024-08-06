import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Terralith from './components/Terralith';
import Login from './components/Login';
import Register from './components/Register';
import SoilSensorServer from './components/SoilSensorServer';
import TerrarioInfo from './components/TerrarioInfo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Terralith" element={<Terralith />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/InfoTerra" element={<TerrarioInfo />} />
                <Route path="/SoilSensorServer" element={<SoilSensorServer />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
