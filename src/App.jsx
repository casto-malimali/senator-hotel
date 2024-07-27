// import React from 'react'
// import Home from './components/Home';
// function App() {
//   return (
//     <Home />
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Homa from './components/Homa';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Newsletter from './components/layouts/Newsletter';



const App = () => {
    return (
        <Router>
          <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Homa />} />
                
            </Routes>
            <Newsletter />
            <Footer />
        </Router>
    );
};

// ReactDOM.render(<App />, document.getElementById('root'));
export default App