# Digital Resume Analyzer

This is a beginner-friendly web application that allows users to upload resumes in PDF format and get a simple analysis of their contents using an AI model (Groq API with LLaMA backend). It helps identify key skills, experiences, and match quality with job descriptions (if extended).

This project was built mainly to learn core concepts of full stack web development, API usage, and integrating AI with real-world inputs like resume PDFs.

## Features

- Upload resume in PDF format
- Analyze the content using a language model
- Extract basic insights like skills, experience, and summary
- Display structured JSON output on the frontend
- Clean UI built with React
- Backend built with Node.js and Express
- API integration using Groq’s LLaMA model

## Tech Stack

- Frontend: React
- Backend: Node.js, Express
- AI Model: Groq API (LLaMA)
- Other Tools: Git, GitHub, VS Code

## Project Goals

- Understand how file upload works in web apps
- Learn how to build and connect frontend and backend
- Practice calling external APIs
- Get hands-on with JSON parsing and rendering
- Improve overall Git/GitHub workflow

## How to Run Locally

1. Clone the repository
2. Install dependencies:

    For backend:
    cd backend  
    npm install  

    For frontend:
    cd frontend  
    npm install  

3. Start the servers:

    Backend:  
    node server.js

    Frontend:  
    npm start

4. Upload a sample resume and see the analysis on screen

## Limitations

- Currently supports only basic resume parsing
- Only one resume can be uploaded at a time
- No authentication or file storage
- Not deployed online (demo via screen recording only)

## Future Improvements

- Upload multiple resumes and compare
- Match against job descriptions
- Add authentication and save history
- Deploy it on a free hosting platform

## Why I Built This

This project was built as part of my learning journey in web development and AI integration. The goal was to take a simple, real-world idea and implement it from scratch while understanding how things work under the hood.

