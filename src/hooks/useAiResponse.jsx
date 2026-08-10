import { useState } from "react";
import API from "../services/api";

const useAiResponse = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchResponse = async (message) => {
        try {
            setLoading(true);
            setError("");

            const res = await API.post("/ai", {
                message
            });

            console.log("API RESPONSE:", res.data);

            return res.data;

        } catch (err) {
            console.error("AI ERROR:", err);

            if (err.response) {
                setError(
                    err.response.data.message || "AI service error"
                );
            } else if (err.request) {
                setError("Server is not responding");
            } else {
                setError("Something went wrong");
            }

            return null;

        } finally {
            setLoading(false);
        }
    };

    return {
        fetchResponse,
        loading,
        error
    };
};

export default useAiResponse;