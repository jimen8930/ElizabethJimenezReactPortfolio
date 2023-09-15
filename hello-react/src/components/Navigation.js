import React from 'react';

const Navigation = ({ setCurrentPage, currentPage }) => {
  console.log('currentPage:', currentPage)
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}>
          <a
            href="#"
            className="nav-link"
            onClick={() => setCurrentPage('home')}
          >
            Home
          </a>
        </li>
        <li className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}>
          <a
            href="#"
            className="nav-link"
            onClick={() => setCurrentPage('about')}
          >
            About
          </a>
        </li>
        <li className={`nav-item ${currentPage === 'portfolio' ? 'active' : ''}`}>
        <a
            href="#"
            className="nav-link"
            onClick={() => setCurrentPage('resume')}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;