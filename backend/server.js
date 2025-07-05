require("dotenv").config();

const express=require("express");
const cors=require("cors");
const uploadRoute=require("./routes/uploadRoute");


const app=express();
const PORT=5000;

console.log("GROQ_API_KEY loaded:", process.env.GROQ_API_KEY ? "Yes" : "Missing");

// middleware
app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("uploads"));

// route
app.use("/",uploadRoute);

app.listen(PORT,()=> {
  console.log(`Server is running at http://localhost:${PORT}`);
});
