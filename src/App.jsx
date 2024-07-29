import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/Home';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Newsletter from './components/layouts/Newsletter';
import About from './components/About';
import ResturantBar from './components/ResturantBar';
import Facility from './components/layouts/Facility';
import SweetRoom from './components/SweetRoom';
import TripleRoom from './components/TripleRoom';
import StandardSuiteRoom from './components/StandardSuiteRoom';
import ExecutiveTwin from './components/ExecutiveTwin';
import ExecutiveRoom from './components/ExecutiveRoom'
import Superior from './components/Superior';




const App = () => {
    return (
        <Router>
          <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/restaurant-bar' element={<ResturantBar />} />                    
                <Route path='/facility' element={<Facility />} />
                <Route path='/suite-room' element={<SweetRoom />} />
                <Route path='/triple-rooms' element={<TripleRoom />} />
                <Route path='/superior-standard-room' element={<StandardSuiteRoom />} />
                <Route path='/executive-room' element={<ExecutiveRoom />   } />
                <Route path='/executive-twin-rooms' element={<ExecutiveTwin />} />
                <Route path='/superior-standard-room-double' element={<Superior />} />

            </Routes>
            <Newsletter />
            <Footer />

        </Router>
    );
};

// ReactDOM.render(<App />, document.getElementById('root'));
export default App 