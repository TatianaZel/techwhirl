import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
// import { ExpertisePage, VisionPage, CareersPage } from './pages/OtherPages';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/*<Route path="/expertise" element={<ExpertisePage />} />*/}
                    {/*<Route path="/our-vision" element={<VisionPage />} />*/}
                    {/*<Route path="/careers" element={<CareersPage />} />*/}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
