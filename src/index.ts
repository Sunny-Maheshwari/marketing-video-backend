import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import suplimaxRoutes from "./routes/suplimax";
import realEstateRoutes from "./routes/realEstate";
import downloadRoutes from "./routes/download";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "https://marketing-video-generator.vercel.app/" }));
app.use(express.json());

app.use("/api/suplimax", suplimaxRoutes);
app.use("/api/real-estate", realEstateRoutes);
app.use("/api/download", downloadRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
