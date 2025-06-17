import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import suplimaxRoutes from "./routes/suplimax";
import realEstateRoutes from "./routes/realEstate";
import downloadRoutes from "./routes/download";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "https://marketing-video-generator.vercel.app",
  "http://localhost:5173",
];


app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

app.use("/api/suplimax", suplimaxRoutes);
app.use("/api/real-estate", realEstateRoutes);
app.use("/api/download", downloadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
