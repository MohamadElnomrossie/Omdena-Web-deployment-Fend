import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h3 className="navbar-brand  text-warning">Yarub</h3>
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
              <li className="nav-item dropdown ">
                <label
                  className="nav-link dropdown-toggle  text-warning"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tasks
                </label>
                <ul
                  className="dropdown-menu bg-dark  text-warning"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  
                 
                  <li className=" text-warning">
                    <NavLink className="nav-link bg-dark text-warning" to="/dialect">
                      Dialect Identification
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link bg-dark  text-warning" to="/tokenization">
                      Tokenization
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link bg-dark  text-warning" to="/lemmatization">
                      Lemmatization
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink className="nav-link bg-dark text-warning" to="/ner">
                      Named Entity Recognition
                    </NavLink>
                  </li>
                  {/* <li className='bg-dark'>
                    <hr className="dropdown-divider   bg-dark" />
                  </li> */}
                  <li>
                    <NavLink className="nav-link bg-dark text-warning" to="/pos">
                      Part of Speech Tagging
                    </NavLink>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider   bg-dark" />
                  </li> */}
                  <li>
                    <NavLink className="nav-link bg-dark text-warning" to="/sentiment">
                      Sentiment Analysis
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link bg-dark text-warning" to="/similar">
                      Similar words
                    </NavLink>
                  </li>
                  {/* <li className='bg-dark'>
                    <hr className="dropdown-divider   bg-dark" />
                  </li> */}
                </ul>
              </li>
              <li className="nav-item bg-dark">
                <a className="nav-link text-warning" href="/#aboutUs">
                  About us
                </a>
              </li>
              <li className="nav-item  bg-dark">
                <a
                  className="nav-link text-warning"
                  href="/#testimonials"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Testimonials
                </a>
              </li>

 <li>
                    <a className="nav-link bg-dark text-warning" href="/#contributors">
                      Contributors
                    </a>
                  </li>
              <li className="nav-item dropdown ">
                <label
                  className="nav-link dropdown-toggle  text-warning"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Developers
                </label>
                <ul
                  className="dropdown-menu bg-dark  text-warning"
                  aria-labelledby="navbarScrollingDropdown"
                >                 
                  <li>
                    <a className="nav-link bg-dark text-warning" href="https://pypi.org/project/yarub/">
                      Yarub dataset
                    </a>
                  </li>

                  <li>
                    <NavLink className="nav-link bg-dark text-warning" to="#">
                      Yarub module
                    </NavLink>
                  </li>

                 
                  
                  {/* <li className='bg-dark'>
                    <hr className="dropdown-divider   bg-dark" />
                  </li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
