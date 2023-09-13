import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const iconSize = "2x";

  return (
    <footer className="text-white py-4">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Elizabeth Jimenez</p>
        <div className="footer-icons-container">
          <a
            href="https://github.com/Jalzu1007"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faGithub} size={iconSize} />
          </a>
          <a
            href="https://www.linkedin.com/in/josealzuri1007/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;