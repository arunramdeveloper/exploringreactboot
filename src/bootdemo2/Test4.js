import React from "react";
import "./Test4.css";

export default function Test4() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>Modern Layout</h1>
      </header>

      {/* Left Navbar */}
      <nav className="navbar">
        <ul>
          {[
            "Home",
            "Service",
            "Product",
            "Settings",
            "About",
            "Contact",
            "Logout",
          ].map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <main className="content">
        <h2>Welcome to My Modern Website</h2>
        <p>
          This is the content area. Add your main content here. The header,
          navbar, and footer remain fixed while this section scrolls if the
          content overflows.
        </p>
      </main>

      {/* Footer */}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Modern Layout. All rights reserved.
      </footer>
    </div>
  );
}
