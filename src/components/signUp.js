import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import Lottie from 'lottie-react';
import animationData from './Animation-1.json'; // Import your Lottie animation JSON

const SignUp = ({ onSignUpComplete }) => {
  // State variables for controlled inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    // Here you would typically handle the sign-up logic (e.g., API call)
    console.log({ email, password });
    // Reset the form
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    onSignUpComplete(); // Call the completion handler

    // Redirect to the login page
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <Lottie animationData={animationData} style={styles.image} />
      </div>
      <div style={styles.formCard}>
        <h2 style={styles.title}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.buttonContainer}>
            <button
              type="submit"
              style={{
                ...styles.button,
                ...(isHovered ? styles.buttonHover : {}),
              }}
              onMouseEnter={() => setIsHovered(true)} // Set hover state
              onMouseLeave={() => setIsHovered(false)} // Reset hover state
            >
              Sign Up
            </button>
          </div>
        </form>
        <p style={styles.footer}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between", // Space between animation and form
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#121212",
    color: "#fff",
    padding: "0 20px", // Add padding to the container
  },
  imageContainer: {
    flex: 1, // Take up one part of the space
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "60%", // Set a maximum width for the animation
    height: "auto",
  },
  formCard: {
    padding: "60px",
    backgroundColor: "#1e1e1e",
    borderRadius: "12px",
    boxShadow: "0 0 50px rgba(0, 123, 255, 0.5)",
    maxWidth: "400px",
    width: "100%",
    margin: "0 20px", // Add margin to the form card
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "10px",
    border: "1px solid #333",
    backgroundColor: "#2a2a2a",
    color: "#fff",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center", // Center the button
  },
  button: {
    width: "50%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, box-shadow 0.3s", // Add transition for box-shadow
    boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)", // Initial shadow
  },
  buttonHover: {
    backgroundColor: "#0056b3", // Darker blue on hover
    boxShadow: "0 0 15px rgba(0, 123, 255, 1)", // Glowing effect on hover
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
};

export default SignUp;