import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Login Section */}
        <div className="auth-section login-section">
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
              Don't have an account? <a href="#register">Register</a>
            </p>
          </form>
        </div>

        {/* Register Section */}
        <div className="auth-section register-section">
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
              <label htmlFor="registerConfirmPassword" className="form-label">
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
              Already have an account? <a href="#login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
