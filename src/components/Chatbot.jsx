import React, { useState } from "react";
import useAiResponse from "../hooks/useAiResponse";
import "./Chatbot.css";

const Chatbot = () => {
    const [message, setMessage] = useState("");

    const {
        fetchResponse,
        response,
        loading,
        error
    } = useAiResponse();

    const options = [
        {
            label: "Work",
            prompt: "Tell me about your work and projects."
        },
        {
            label: "About me",
            prompt: "Tell me about yourself."
        },
        {
            label: "Skills",
            prompt: "What are your technical skills?"
        },
        {
            label: "Contact",
            prompt: "How can I contact you?"
        }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message.trim() || loading) return;

        await fetchResponse(message);

        setMessage("");
    };

    const handleOption = async (prompt) => {
        if (loading) return;

        setMessage(prompt);
        await fetchResponse(prompt);
        setMessage("");
    };

    return (
        <div className="chat-container">

            <h1 className="chat-title">
                Hi, I'm <span> Dharmapal Veerendrakumar bharati</span>
            </h1>

            <div className="chat-box">

                <div className="chat-content">

                    {!response && !loading && (
                        <p className="chat-placeholder">
                            Ask me anything about Dharmapal...
                        </p>
                    )}

                    {loading && (
                        <p className="chat-loading">
                            Thinking...
                        </p>
                    )}

                    {error && (
                        <p className="chat-error">
                            {error}
                        </p>
                    )}

                    {response && !loading && (
                        <p className="chat-response">
                            {response}
                        </p>
                    )}

                </div>

                <div className="chat-options">
                    {options.map((option) => (
                        <button
                            key={option.label}
                            onClick={() => handleOption(option.prompt)}
                            disabled={loading}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                <form
                    className="chat-input-wrapper"
                    onSubmit={handleSubmit}
                >
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask anything about dharmapal..."
                        rows={1}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e);
                            }
                        }}
                    />
                </form>

            </div>
        </div>
    );
};

export default Chatbot;