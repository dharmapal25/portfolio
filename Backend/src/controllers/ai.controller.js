const groq = require("../config/groq");

async function aiResponse(req, res) {
    try {
        const { message } = req.body;

        const response = await groq.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
            max_tokens: 1000,
        });

        const aiMessage = response.choices[0].message.content;

        res.status(200).json({
            message: aiMessage,
        });

    } catch (err) {
        console.error("AI Response Error:", err);

        res.status(500).json({
            message: "AI service is currently unavailable",
        });
    }
}

module.exports = aiResponse;