import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminAttendance.css"; // Import the CSS file

const AdminAttendance = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://attendance-tracking-based-reward-system.onrender.com/students")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student attendance data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="admin-attendance-container">
      <h2 className="admin-attendance-header">Admin - Student Attendance</h2>
      <table className="admin-attendance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Attendance</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.attendance}</td>
              <td>{student.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAttendance;
