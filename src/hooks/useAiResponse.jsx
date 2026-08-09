import { useState } from "react";
import API from "../services/api";

const useAiResponse = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [response, setResponse] = useState("");

    const fetchResponse = async (message) => {
        try {
            setLoading(true);
            setError("");

            const res = await API.post("/ai", {
                message
            });

            setResponse(res.data.message);

            return res.data.message;

        } catch (err) {
            console.error(err);

            if (err.response) {
                setError(
                    err.response.data.message || "AI service error"
                );
            } else if (err.request) {
                setError("Server is not responding");
            } else {
                setError("Something went wrong");
            }

        } finally {
            setLoading(false);
        }
    };

    return {
        fetchResponse,
        response,
        loading,
        error
    };
};

export default useAiResponse;