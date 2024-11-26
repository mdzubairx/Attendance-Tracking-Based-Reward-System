import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Leaderboard.css"; // Import the enhanced CSS

const Leaderboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("https://attendance-tracking-based-reward-system.onrender.com/students")
      .then((response) => {
        // Sort students by points (descending)
        const sortedStudents = response.data.sort((a, b) => b.points - a.points);
        setStudents(sortedStudents);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2>🏆 Student Leaderboard 🏆</h2>
        <p>Recognizing the best performers!</p>
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={student._id}
              className={`leaderboard-row ${index === 0 ? "top-rank" : ""}`}
            >
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
