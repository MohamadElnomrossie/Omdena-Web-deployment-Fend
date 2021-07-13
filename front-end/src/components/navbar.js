import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h3 className="navbar-brand">Yarub</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                {/* <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink> */}
              </li>
              <li className="nav-item dropdown">
                <label
                  className="nav-link dropdown-toggle"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tasks
                </label>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  
                 
                  <li>
                    <NavLink className="nav-link" to="/dialect">
                      Dialect Identification
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/tokenization">
                      Tokenization
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/lemmatization">
                      Lemmatization
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/ner">
                      Named Entity Recognition
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/pos">
                      Part of Speech Tagging
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/sentiment">
                      Sentiment Analysis
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/similar">
                      Similar words
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/lemmatization">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
