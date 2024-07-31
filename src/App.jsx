import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ResturantBar from './components/ResturantBar';
import Facility from './components/layouts/Facility';
import SweetRoom from './components/SweetRoom';
import TripleRoom from './components/TripleRoom';
import StandardSuiteRoom from './components/StandardSuiteRoom';
import ExecutiveTwin from './components/ExecutiveTwin';
import ExecutiveRoom from './components/ExecutiveRoom'
import Superior from './components/Superior';
import MapDirection from './components/MapDirection';
import GalleryPage from './components/GalleryPage';
import Contact from './components/Contact';
import Appointment from './components/Appointment';
import MainLayout from './components/layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';





const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout><Home /></MainLayout>} />
                <Route path="/about" element={<MainLayout><About /></MainLayout>} />
                <Route path="/restaurant-bar" element={<MainLayout><ResturantBar /></MainLayout>} />
                <Route path="/facility" element={<MainLayout><Facility /></MainLayout>} />
                <Route path="/suite-room" element={<MainLayout><SweetRoom /></MainLayout>} />
                <Route path="/triple-rooms" element={<MainLayout><TripleRoom /></MainLayout>} />
                <Route path="/superior-standard-room" element={<MainLayout><StandardSuiteRoom /></MainLayout>} />
                <Route path="/executive-room" element={<MainLayout><ExecutiveRoom /></MainLayout>} />
                <Route path="/executive-twin-rooms" element={<MainLayout><ExecutiveTwin /></MainLayout>} />
                <Route path="/superior-standard-room-double" element={<MainLayout><Superior /></MainLayout>} />
                <Route path="/map-direction" element={<MainLayout><MapDirection /></MainLayout>} />
                <Route path="/gallery" element={<MainLayout><GalleryPage /></MainLayout>} />
                <Route path="/g" element={<MainLayout><GalleryPage /></MainLayout>} />
                <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
                <Route path="/appointment" element={<MainLayout><Appointment /></MainLayout>} />
            </Routes>
        </Router>
    );
};

export default App 