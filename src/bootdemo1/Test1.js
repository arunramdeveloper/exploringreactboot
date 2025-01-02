import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Test1() {
  return (
    <>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <header
          style={{
            backgroundColor: "darkgray",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h1>My Website</h1>
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <a href="#home" className="nav-link text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#service" className="nav-link text-white">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#product" className="nav-link text-white">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#settings" className="nav-link text-white">
                    Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link text-white">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link text-white">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#logout" className="nav-link text-white">
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Content */}
        <main
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#f8f9fa", // Light gray background
            overflowY: "auto",
          }}
        >
          <h2>Welcome to My Website</h2>
          <p>
            This is the content area. Add your main content here. The header and
            footer remain fixed while this section scrolls if the content
            overflows.
          </p>
        </main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "darkgray",
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            padding: "10px",
          }}
        >
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </footer>
      </div>
    </>
  );
}
