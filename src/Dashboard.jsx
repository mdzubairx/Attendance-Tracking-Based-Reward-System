import React, { useEffect, useState } from "react";
import axios from "axios";
import './Dashboard.css'

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://attendance-tracking-based-reward-system.onrender.com/students")
    .then((res)=>{
      setStudents([...res.data])
    });
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Student Dashboard</h1>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Attendance</th>
            <th>Points</th>
            <th>Parent Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}> 
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.attendance}</td>
              <td>{student.points}</td>
              <td>{student.parentEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
