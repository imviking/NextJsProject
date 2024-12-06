import React from 'react';
import Link from 'next/link';

const Navbar = ({ username, email }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          My CRUD App
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/views/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/views/signup" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/views/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/views/blog" className="nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="ms-auto">
        {username && email ? (
          <p className="text-light m-0">
            Welcome, {username} ({email})
          </p>
        ) : (
          <p className="text-light m-0">Welcome, Guest</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
