import "./SiteContainer.css";

import { Link } from "react-router-dom";
import React from "react";
import { SocialMediaLinks } from "./components";

interface SiteContainerProps {
  children: React.ReactNode;
}

function SiteContainer({ children }: SiteContainerProps) {
  return (
    <div className="site-container">
      <header>
        <div className="header-upper">
          <a href="/">
            <h1>Patrick and Michaela</h1>
          </a>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-lower">
          <p className="page-title">Patrick and Michaela</p>
          <p className="page-summary">
            A travel blog to help you live the life you are looking for
          </p>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2021 Patrick and Michaela</p>
        <SocialMediaLinks />
      </footer>
    </div>
  );
}

export default SiteContainer;
