import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useAiResponse from "../hooks/useAiResponse";
import "./Chatbot.css";

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const messagesEndRef = useRef(null);

    const {
        fetchResponse,
        loading,
        error
    } = useAiResponse();

    // Keep the latest user or AI message visible automatically.
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [messages, loading]);

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

        const userMessage = message.trim();

        setMessage("");

        // Send the user's message and add both messages to the chat.
        const data = await fetchResponse(userMessage);

        if (!data) return;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: data.message
            },
            {
                role: "ai",
                content: data.ai
            }
        ]);
    };

    const handleOption = async (prompt) => {
        if (loading) return;

        // Quick options use the same AI request flow as the textarea.
        const data = await fetchResponse(prompt);

        if (!data) return;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: data.message
            },
            {
                role: "ai",
                content: data.ai
            }
        ]);
    };

    return (
        <div className="chat-container">

            <h1 className="chat-title">
                Hi, I'm <span>Dharmapal </span>
            </h1>

            <div className="chat-box">

                <div className="chat-content" data-lenis-prevent>

                    {messages.length === 0 && !loading && !error && (
                        <p className="chat-placeholder">
                            Ask me anything about Dharmapal...
                        </p>
                    )}

                    <div className="messages">

                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message-row ${msg.role}`}
                            >
                                <div className="message-bubble">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {msg.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}

                        {loading && (
                            <div className="message-row ai">
                                <div className="message-bubble chat-loading">
                                    Thinking...
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />

                    </div>

                    {error && (
                        <div className="message-row ai">
                            <div className="message-bubble chat-error">
                                {error}
                            </div>
                        </div>
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
                        placeholder="Ask anything about Dharmapal..."
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