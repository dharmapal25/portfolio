import emailjs from "@emailjs/browser";
import { useState } from "react";

import { BsFillSendFill } from "react-icons/bs";

import "../styles/Form.css";

const Form = () => {
    // states: null, "sending", "success", "error", "limit_reached"
    const [status, setStatus] = useState(null);

    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem("count");
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
console.log("IDs:", SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
    const handleSubmit = (e) => {
        e.preventDefault();

        // (Max 2 allowed)
        if (count >= 2) {
            setStatus("limit_reached");
            return;
        }

        setStatus("sending");

        const targetForm = e.target;

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, targetForm, PUBLIC_KEY)
            .then((res) => {
                console.log(res);
                setStatus("success");
                targetForm.reset();

                setTimeout(() => {
                    setStatus(null);
                }, 2000);

                const newCount = count + 1;
                setCount(newCount);
                localStorage.setItem("count", newCount);
            })
            .catch((err) => {
                console.error("Error sending message:", err);
                setStatus("error");
            });
    };

    // Check if maximum limit has already reached
    const isLimitExceeded = count >= 2;

    return (
        <div className="form-overlay" >
            <div className="form-modal" onClick={(e) => e.stopPropagation()}>

                <div className="form-header">
                    <div>
                        <h2 className="form-title">Let's <span>Connect</span></h2>
                    </div>
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
                                disabled={status === "sending" || isLimitExceeded}
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
                                disabled={status === "sending" || isLimitExceeded}
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
                            disabled={status === "sending" || isLimitExceeded}
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
                    {/* Max Limit reached notification indicator */}
                    {(status === "limit_reached" || isLimitExceeded) && (
                        <p style={{ color: "crimson", fontSize: "13px", margin: "0", fontWeight: "500" }}>
                            Today max limit have completed
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn-primary form-submit"
                        disabled={status === "sending" || status === "success" || isLimitExceeded}
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