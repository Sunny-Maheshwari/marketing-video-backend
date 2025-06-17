import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import suplimaxRoutes from "./routes/suplimax";
import realEstateRoutes from "./routes/realEstate";
import downloadRoutes from "./routes/download";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow CORS from Vercel frontend and local dev
const allowedOrigins = [
  "https://marketing-video-generator.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// API routes
app.use("/api/suplimax", suplimaxRoutes);
app.use("/api/real-estate", realEstateRoutes);
app.use("/api/download", downloadRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
