import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Attendance.css"; // Import the CSS for styling

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch student data from the backend
    axios
      .get("https://attendance-tracking-based-reward-system.onrender.com/students")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setLoading(false);
      });
  }, []);

  const handleAttendance = (id) => {
    // Send a request to update the attendance and points of a student
    axios
      .post(`http://localhost:5000/students/${id}/attendance`)
      .then((response) => {
        alert("Attendance and points updated!");
        // Update local state
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student._id === id
              ? {
                  ...student,
                  attendance: response.data.attendance,
                  points: response.data.points,
                }
              : student
          )
        );
      })
      .catch((error) => {
        console.error("Error updating attendance or points:", error);
      });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="attendance-container">
      <h2 className="attendance-title">Student Attendance & Points</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.attendance || 0}</td>
              <td>{student.points || 0}</td>
              <td>
                <button
                  className="attendance-btn"
                  onClick={() => handleAttendance(student._id)}
                >
                  Mark Attendance (+10 Points)
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
