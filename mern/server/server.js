import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import records from "./routes/record.js";

dotenv.config({ path: "./config.env" });

console.log(process.env.ATLAS_URI);

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/record", records);

mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log("MongoDB database connection established successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
