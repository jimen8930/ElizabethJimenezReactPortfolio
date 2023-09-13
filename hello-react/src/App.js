//Imports
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/Footer1';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/About';


// Function that renders components with useState
function App () {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;