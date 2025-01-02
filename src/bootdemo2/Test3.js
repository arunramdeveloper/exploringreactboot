import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Test3() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "60px 1fr 40px", // Header, Content, Footer
        gridTemplateColumns: "200px 1fr", // Navbar, Content
        gridTemplateAreas: `
              "header header"
              "navbar content"
              "footer footer"
            `,
        height: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          gridArea: "header",
          backgroundColor: "darkgray",
          color: "white",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "20px" }}>My Website</h1>
      </header>

      {/* Left Navbar */}
      <nav
        style={{
          gridArea: "navbar",
          backgroundColor: "darkgray",
          color: "white",
          padding: "20px 10px",
        }}
      >
        <ul className="nav flex-column" style={{ fontWeight: "bold" }}>
          {[
            "Home",
            "Service",
            "Product",
            "Settings",
            "About",
            "Contact",
            "Logout",
          ].map((item, index) => (
            <li className="nav-item mb-2" key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                style={{
                  color: "white",
                  textTransform: "capitalize",
                  padding: "5px 10px",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#505050")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <main
        style={{
          gridArea: "content",
          backgroundColor: "#f8f9fa", // Light color for content
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <h2 style={{ color: "darkgray" }}>Welcome to My Website</h2>
        <p style={{ color: "#333", lineHeight: "1.6" }}>
          This is the content area. Add your main content here. The header,
          navbar, and footer remain fixed while this section scrolls if the
          content overflows.
        </p>
      </main>

      {/* Footer */}
      <footer
        style={{
          gridArea: "footer",
          backgroundColor: "darkgray",
          color: "white",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </footer>
    </div>
  );
}
