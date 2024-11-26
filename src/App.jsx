import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddStudent from "./AddStudent";
import Leaderboard from "./Leaderboard";
import Attendance from "./Attendance";
import AdminAttendance from "./AdminAttendance";
import SendEmail from "./SendEmail"; // Import the new component
import "./App.css"; // Import the enhanced CSS
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/add-student">Add Student</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/admin-attendance">Admin Attendance</Link>
        <Link to="/send-email">Send Email</Link> {/* Add the link */}
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/admin-attendance" element={<AdminAttendance />} />
        <Route path="/send-email" element={<SendEmail />} /> {/* Add the route */}
      </Routes>
    </Router>
  );
}

export default App;
