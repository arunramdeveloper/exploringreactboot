import React, { useState } from "react";
import "./Login2.css";

export default function Login2() {
  const [showLogin, setShowLogin] = useState(true); // Toggle between Login and Register

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Card Header */}
        <div className="auth-header">
          <button
            className={`toggle-btn ${showLogin ? "active" : ""}`}
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button
            className={`toggle-btn ${!showLogin ? "active" : ""}`}
            onClick={() => setShowLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Card Body */}
        <div className="auth-body">
          {showLogin ? (
            <div className="login-form">
              <h2 className="auth-title">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
                <p className="text-center mt-3">
                  Don't have an account?{" "}
                  <a
                    href="#register"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowLogin(false);
                    }}
                  >
                    Register
                  </a>
                </p>
              </form>
            </div>
          ) : (
            <div className="register-form">
              <h2 className="auth-title">Register</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="registerEmail"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="registerPassword"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="registerConfirmPassword"
                    className="form-label"
                  >
                    Retype Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="registerConfirmPassword"
                    placeholder="Retype your password"
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Register
                </button>
                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <a
                    href="#login"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowLogin(true);
                    }}
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
