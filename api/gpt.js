// VERCEL SERVERLESS FUNCTION FORMAT
// Unlike Express servers that run continuously, this function only executes when called
// Each file in /api/ folder becomes an endpoint: /api/gpt.js → https://yourapp.vercel.app/api/gpt

import { OpenAI } from "openai";

// ENVIRONMENT VARIABLES
// Vercel automatically loads .env files and makes process.env available
// In production, you'll set OPENAI_API_KEY in Vercel dashboard
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// SERVERLESS HANDLER FUNCTION
// This replaces your entire Express app.post("/api/gpt", ...) logic
// req = incoming request object (similar to Express req)
// res = response object (similar to Express res)
export default async function handler(req, res) {

  // CORS CONFIGURATION
  // Unlike Express with cors() middleware, we manually set headers
  // Allow requests from any origin (your deployed frontend)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // PREFLIGHT REQUEST HANDLING
  // Browsers send OPTIONS request before actual request for CORS
  // Express cors() middleware handled this automatically
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // METHOD VALIDATION
  // Same as Express - only allow POST requests
  // In Express: app.post() automatically filtered methods
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // REQUEST BODY PARSING
  // Vercel automatically parses JSON body (like Express body-parser)
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // OPENAI API CALL
    // Exact same logic as your Express server
    // Function will terminate after this completes (unlike Express server)
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a movie recommendation agent" },
        { role: "user", content: prompt },
      ],
      max_completion_tokens: 300,
    });

    // RESPONSE SENDING
    // Same as Express res.json()
    // Function automatically terminates after response is sent
    const outputText = response.choices[0].message.content;
    res.json({ output: outputText });

  } catch (error) {
    // ERROR HANDLING
    // Same as Express error handling
    console.error("GPT API error:", error);
    res.status(500).json({ error: error.message });
  }
}

// KEY DIFFERENCES FROM EXPRESS:
// 1. No server.listen() - Vercel handles server management
// 2. No app.use() middleware - manually configure CORS
// 3. Single function per file - not multiple routes in one file
// 4. ES6 import/export - not require/module.exports
// 5. Automatic scaling - Vercel handles traffic spikes
// 6. Cold starts - slight delay on first request after inactivity
// 7. Stateless - function doesn't persist data between requests