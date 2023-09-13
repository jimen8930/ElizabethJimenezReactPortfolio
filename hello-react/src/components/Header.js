import React from 'react';
import Navigation from './Navigation';

const Header = ({ setCurrentPage, currentPage }) => {
    return (
      <header className="text-white py-3">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand">Jose Alzuri</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Navigation setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </nav>
        </div>
        </header>
  );
};

export default Header;
