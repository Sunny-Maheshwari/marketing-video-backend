import express from "express";
import { generateGeminiVideo } from "../services/gemini";

const router = express.Router();

router.post("/", async (req, res) => {
  const { features, tone, audience, style } = req.body;

  const prompt = `Create a ${style} style 30-second marketing video for Suplimax energy drink.
Include product image showing the Suplimax logo.
Features: ${features}
Tone: ${tone}
Target Audience: ${audience}`;

  try {
    const videoUrl = await generateGeminiVideo(prompt, {
      useCase: "suplimax",
      tone,
      style,
    });

    res.json({ videoUrl });
  } catch (error) {
    console.error("Error generating video:", error);
    res.status(500).json({ error: "Video generation failed" });
  }
});

export default router;
