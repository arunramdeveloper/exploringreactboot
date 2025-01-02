import React from "react";
import "./Layout.css";
import axios from "axios";

export default function Layout() {
  // Base API URL
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("GET - users: ", response.data[1]);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);

      const result = response.data.map((item) => {
        return item.username;
      });
      console.log(result);
    } catch (error) {
      console.error("GET error: ", error);
    }
  };

  const addUser = async () => {
    const newUser = {
      name: "thanga",
      email: "thanga@gmail.com",
      phone: "123-456-7890",
    };
    try {
      const response = await axios.post(API_URL, newUser);
      console.log("POST new user ", response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
    } catch (error) {}
  };

  const updateUser = async () => {
    const userId = 1;
    const updatedUser = {
      name: "arun",
      email: "janedoe@example.com",
      phone: "987-654-3210",
    };
    try {
      const response = await axios.put(`${API_URL}/${userId}`, updatedUser);
      console.log(response.data);
      console.log(response.status);
    } catch (error) {
      console.error("put error ", error);
    }
  };

  const deleteUser = async () => {
    const userId = 1;
    try {
      const response = await axios.delete(`${API_URL}/${userId}`);
      console.log(response.data);
      console.log(response.status);
    } catch (error) {
      console.log("delete error ", error);
    }
  };

  return (
    <div className="layout-container">
      {/* Header */}
      <header className="layout-header">
        <h1 className="header-title">My React Website</h1>
        <nav className="navbar">
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#logout">Logout</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <main className="layout-content">
        <h2>{"api testing "}</h2>
        <button className="btn btn-primary" onClick={fetchUsers}>
          Axios Get method
        </button>{" "}
        <br></br>
        <br></br>
        <button className="btn btn-primary" onClick={addUser}>
          Axios Post method
        </button>{" "}
        <br></br>
        <br></br>
        <button className="btn btn-primary" onClick={updateUser}>
          Axios Put method
        </button>{" "}
        <br></br>
        <br></br>
        <button className="btn btn-primary" onClick={deleteUser}>
          Axios Delete method
        </button>{" "}
        <br></br>
      </main>

      {/* Footer */}
      <footer className="layout-footer">
        <p>&copy; 2025 My React Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
