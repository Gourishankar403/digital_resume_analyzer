const { Groq } = require("groq-sdk");

const groqClient = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

module.exports = { groqClient };


console.log("🔐 GROQ_API_KEY loaded:", process.env.GROQ_API_KEY ? "✅ Yes" : "❌ No");
