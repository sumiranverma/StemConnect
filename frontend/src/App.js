import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
