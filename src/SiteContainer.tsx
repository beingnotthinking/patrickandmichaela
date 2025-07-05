import "./SiteContainer.css";

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { SocialMediaLinks } from "./components";

interface SiteContainerProps {
  children: React.ReactNode;
}

function SiteContainer({ children }: SiteContainerProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-container">
      <header>
        <div className="header-upper">
          <a href="/">
            <h1>Patrick & Michaela</h1>
          </a>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <nav className={mobileMenuOpen ? 'open' : ''}>
            <ul>
              <li>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              </li>
              <li>
                <Link to="/gear" onClick={() => setMobileMenuOpen(false)}>Gear</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container">
          <p>© 2024 Patrick & Michaela - Sailing Thalia</p>
          <SocialMediaLinks />
        </div>
      </footer>
    </div>
  );
}

export default SiteContainer;
