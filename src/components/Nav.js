import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className={`nav ${isOpen ? 'open' : ''}`}>
        <ul onClick={handleLinkClick}>
          <li><HashLink to="/pf#header" onClick={handleLinkClick}>HOME</HashLink></li>
          <li ><Link to="/profile" onClick={handleLinkClick}>PROFILE</Link></li>
          <li ><HashLink to="/works#works-top" onClick={handleLinkClick}>WORKS</HashLink></li>
          <li ><HashLink to="/pf#contact" onClick={handleLinkClick}>CONTACT</HashLink></li>
        </ul>
      </div>

      <div className={`toggle`} onClick={handleToggle}>
        <span />
        <span />
        <span />
      </div>

      <div id="mask" className={`nav ${isOpen ? 'open' : ''}`} onClick={handleToggle} />
    </nav>
  );
};

export default Nav