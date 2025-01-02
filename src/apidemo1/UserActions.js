import React from "react";
import axios from "axios";

const UserActions = () => {
  // Base API URL
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // GET: Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("GET - Users:", response.data);
      console.log(response.status);
    } catch (error) {
      console.error("GET Error:", error);
    }
  };

  // POST: Add a new user (dummy data)
  const addUser = async () => {
    const newUser = {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
    };

    try {
      const response = await axios.post(API_URL, newUser);
      console.log("POST - New User:", response.data);
      console.log(response.status);
    } catch (error) {
      console.error("POST Error:", error);
    }
  };

  // PUT: Update an existing user (dummy data)
  const updateUser = async () => {
    const userId = 1; // Assume we're updating the user with ID 1
    const updatedUser = {
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "987-654-3210",
    };

    try {
      const response = await axios.put(`${API_URL}/${userId}`, updatedUser);
      console.log("PUT - Updated User:", response.data);
      console.log(response.status);
    } catch (error) {
      console.error("PUT Error:", error);
    }
  };

  // DELETE: Delete a user by ID
  const deleteUser = async () => {
    const userId = 1; // Assume we're deleting the user with ID 1

    try {
      const response = await axios.delete(`${API_URL}/${userId}`);
      console.log("DELETE - Deleted User:", response.data);
      console.log(response.status);
    } catch (error) {
      console.error("DELETE Error:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>User Actions</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={fetchUsers}>
          Get Users
        </button>
        <button style={styles.button} onClick={addUser}>
          Add User
        </button>
        <button style={styles.button} onClick={updateUser}>
          Update User
        </button>
        <button style={styles.button} onClick={deleteUser}>
          Delete User
        </button>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default UserActions;
