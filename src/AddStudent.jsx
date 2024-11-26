import React, { useState } from "react";
import axios from "axios";
import "./AddStudent.css"; // Import the CSS for styling

const AddStudent = () => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // For success or error messages

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!name.trim() || !className.trim() || !parentEmail.trim()) {
      setMessageType("error");
      setMessage("All fields are required!");
      return;
    }

    try {
      // Send POST request to backend
      const response = await axios.post("https://attendance-tracking-based-reward-system.onrender.com/students", { 
        name, 
        class: className, 
        parentEmail 
      });
      setMessageType("success");
      setMessage("Student added successfully!");
      setName(""); // Clear the fields
      setClassName("");
      setParentEmail("");
    } catch (error) {
      console.error("Error adding student:", error.response?.data || error);
      setMessageType("error");
      setMessage("Failed to add student. Please try again.");
    }
  };

  return (
    <div className="add-student-container">
      <h2 className="form-title">Add Student</h2>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="class">Class:</label>
          <input
            type="text"
            id="class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Enter class"
          />
        </div>
        <div className="form-group">
          <label htmlFor="parentEmail">Parent Email:</label>
          <input
            type="email"
            id="parentEmail"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            placeholder="Enter parent's email"
          />
        </div>
        <button type="submit" className="submit-button">Add</button>
      </form>
      {message && (
        <p className={`form-message ${messageType === "success" ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AddStudent;
