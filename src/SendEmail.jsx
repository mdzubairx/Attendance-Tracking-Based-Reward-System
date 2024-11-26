import React, { useState } from "react";
import axios from "axios";
import "./SendEmail.css";  // Import the CSS file

const SendEmail = () => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://attendance-tracking-based-reward-system.onrender.com/send-email", {
        recipientEmail,
        subject,
        message,
      });
      setResponseMessage(response.data.message);
      setRecipientEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("Failed to send email. Please try again.");
    }
  };

  return (
    <div className="email-container">
      <h2 className="email-header">Send Email</h2>
      <form onSubmit={handleSubmit} className="email-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Recipient Email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea-field"
            required
          />
        </div>
        <button type="submit" className="submit-button">Send Email</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default SendEmail;
