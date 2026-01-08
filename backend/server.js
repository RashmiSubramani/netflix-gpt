require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/gpt", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Prompt is required" });

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a movie recommendation agent" },
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 300,
    });
    console.log("BR resp", response);
    // Return GPT output as-is
    const outputText = response.choices[0].message.content;
    console.log("BR out", outputText);
    res.json({ output: outputText });
  } catch (error) {
    console.error("GPT API error:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
