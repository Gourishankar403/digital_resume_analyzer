import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function UploadForm() {
  const [file,setFile]=useState(null);
  const [analysis,setAnalysis]=useState('');
  const [fileName,setFileName]=useState('');

  const handleChange=(e)=>{
    setFile(e.target.files[0]);
    setFileName(e.target.files[0]?.name || '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("resume",file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      setAnalysis(response.data.analysis);
    } catch (error) {
      console.error("Upload failed:", error);
      setAnalysis("❌ Error analyzing resume.");
    }
  };

  return (
    <div className="container">
      <h2>Digital Resume Analyzer</h2>
      <p>Upload your PDF resume to get a smart AI-driven analysis.</p>

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} accept="application/pdf" />
        <button type="submit">📄 Upload Resume</button>
      </form>

      {fileName && (
        <p><strong>Resume uploaded successfully -</strong> {fileName}</p>
      )}

      {analysis && (
        <div className="analysis">
          <strong>🧠 AI Analysis:</strong><br /><br />
          {analysis}
        </div>
      )}
    </div>
  );
}

export default UploadForm;
