const groq = require("../config/groq");
const context = require("../prompt/me");

async function aiResponse(req, res) {
    try {
        const { message } = req.body;

        const response = await groq.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "system",
                    content: context
                },
                {
                    role: "user",
                    content: message,
                },
            ],
            max_tokens: Number(process.env.MAX_WINDOW)
        });

        const aiMessage = response.choices[0].message.content;
        console.log(response.choices[0].message.content)
        // console.log("response : ", response)
        res.status(200).json({
            message,
            ai: aiMessage,
        });

    } catch (err) {
        console.error("AI Response Error:", err);

        res.status(500).json({
            message: "AI service is currently unavailable",
        });
    }
}

module.exports = aiResponse;