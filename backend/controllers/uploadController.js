const fs=require("fs");
const path=require("path");
const pdfParse=require("pdf-parse");
const { groqClient }=require("../utils/groqClient");

console.log("🧠 Upload controller loaded");

const handleUpload = async (req, res) => {
  try {
    const filePath=path.join(__dirname, "..", req.file.path);
    const fileBuffer=fs.readFileSync(filePath);
    const data=await pdfParse(fileBuffer);

    let resumeText=data.text;
    resumeText=resumeText.split(" ").slice(0, 5000).join(" "); // Safe token size

  const prompt= `
You are a professional resume analysis expert. Analyze the following resume thoroughly and return your response in this **strict format**:

Key Skills:
• skill 1
• skill 2

Work Experience:
• Job Title, Company, Location, Dates
  • Responsibility 1
  • Responsibility 2

Education:
• Degree, University, Location, Year


Recommendations for Improvement:
• Suggestion 1
• Suggestion 2

Skill Relevance (Trends Check):
• Are the listed skills up to date with current industry standards? Mention any missing trending tools or frameworks if any.
• Rate the resume's skillset relevance on a scale of 1 to 10.
• Explain your rating briefly (1–2 lines).

🛑 Very Important:
• Use plain text only.
• Do not use "**" or "*" anywhere.
• Use "•" for all bullet points.
• Do not include any introductions or conclusions. Just return the formatted analysis.
• Be concise, professional, and specific.

Resume Text:
${resumeText}
`;


    const aiResponse = await groqClient.chat.completions.create({
      model:"llama3-8b-8192",
      messages:[
        { role: "system", content:"You are a helpful resume assistant." },
        { role: "user", content: prompt },
      ],
    });

    const analysis =
      aiResponse?.choices?.[0]?.message?.content ||
      "No analysis returned from Groq.";

    console.log("🧠 Final extracted analysis:",analysis);

    res.json({
      message: "Resume uploaded successfully",
      fileName: req.file.originalname,
      filePath: req.file.path,
      analysis,
    });
  } catch (error) {
    console.error("❌ Error in upload controller:", error);
    res.status(500).json({ error:"Resume analysis failed." });
  }
};

module.exports = {handleUpload};
