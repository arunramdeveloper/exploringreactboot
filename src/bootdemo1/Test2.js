import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Test2() {
  return (
    <>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Header */}
        <header
          style={{
            background: "linear-gradient(90deg, #1e3c72, #2a5298)", // Blue gradient
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h1 style={{ fontSize: "24px" }}>My Modern Website</h1>
            <nav>
              <ul className="nav">
                {[
                  "Home",
                  "Service",
                  "Product",
                  "Settings",
                  "About",
                  "Contact",
                  "Logout",
                ].map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="nav-link"
                      style={{
                        color: "white",
                        textTransform: "uppercase",
                        fontWeight: "500",
                        padding: "0 10px",
                        transition: "color 0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#ffcc00")}
                      onMouseOut={(e) => (e.target.style.color = "white")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {/* Content */}
        <main
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: "#fdfdfd", // Soft white
            overflowY: "auto",
          }}
        >
          <h2 style={{ color: "#1e3c72" }}>Welcome to My Modern Website</h2>
          <p style={{ color: "#333", lineHeight: "1.6" }}>
            This is the content area. Feel free to add your main content here.
            The header and footer are styled with modern colors and gradients to
            create a professional, sleek look.
          </p>
        </main>

        {/* Footer */}
        <footer
          style={{
            background: "#2a9d8f", // Teal
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            padding: "10px",
          }}
        >
          &copy; {new Date().getFullYear()} My Modern Website. Built with ❤️.
        </footer>
      </div>
    </>
  );
}
