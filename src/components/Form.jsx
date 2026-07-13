import { useState } from "react";
import "../styles/Form.css";
import {  BsFillSendFill, BsXLg } from "react-icons/bs";
import axios from "axios";

const Form = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState(null); // states: null, "sending", "success", "error"

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        const targetForm = e.target;
        const data = Object.fromEntries(new FormData(targetForm));

        axios.post(`${import.meta.env.REACT_API_URL}/send-msg`, {
            email: data.from_email,
            role: data.from_role,
            message: data.message
        })
        .then(() => {
            setStatus("success");
            targetForm.reset(); // Clear form fields on success
            
            setTimeout(() => {
                onClose();
                setStatus(null);
            }, 2000);
        })
        .catch((err) => {
            console.error("Error sending message:", err);
            setStatus("error");
           
        });
    };

    return (
        <div className="form-overlay" onClick={onClose}>
            <div className="form-modal" onClick={(e) => e.stopPropagation()}>

                <div className="form-header">
                    <div>
                        <h2 className="form-title">Let's <span>Connect</span></h2>
                    </div>
                    <button className="form-close" onClick={onClose} aria-label="Close">
                        <BsXLg/>
                    </button>
                </div>

                <div className="form-divider" />

                {/* Form Fields */}
                <form className="form-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="field-label">Email</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M2 7l10 7 10-7" />
                            </svg>
                            <input 
                                type="email" 
                                placeholder="your@email.com" 
                                id="email" 
                                name="from_email" 
                                required 
                                disabled={status === "sending"}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="role" className="field-label">Role</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <input 
                                type="text" 
                                placeholder="Designer / Developer" 
                                id="role" 
                                name="from_role" 
                                required 
                                disabled={status === "sending"}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="field-label">Message</label>
                        <textarea 
                            placeholder="What's on your mind..." 
                            id="message" 
                            name="message" 
                            rows="4" 
                            required 
                            disabled={status === "sending"}
                        />
                    </div>

                    {/* Feedback Messages */}
                    {status === "error" && (
                        <p style={{ color: "crimson", fontSize: "13px", margin: "0" }}>
                            Something went wrong. Please try again.
                        </p>
                    )}
                    {status === "success" && (
                        <p style={{ color: "green", fontSize: "13px", margin: "0" }}>
                            Message sent! Closing...
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn-primary form-submit"
                        disabled={status === "sending" || status === "success"}
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                        <BsFillSendFill style={{ marginLeft: "8px" }} />
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Form;