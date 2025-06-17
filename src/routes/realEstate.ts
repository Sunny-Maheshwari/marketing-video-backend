import express from "express";
import { generateGeminiVideo } from "../services/gemini";

const router = express.Router();

router.post("/", async (req, res) => {
  const { location, features, audience, tone, style } = req.body;

  const prompt = `Create a 30-second real estate promotional video for a property in ${location}.
Highlight features: ${features}.
Style: ${style}
Target Audience: ${audience}
Tone: ${tone}
Include suitable visuals and upbeat background music.`;

  try {
    const videoUrl = await generateGeminiVideo(prompt, {
      useCase: "real-estate",
      tone,
      style,
    });

    res.json({ videoUrl });
  } catch (error) {
    console.error("Error generating video:", error);
    res.status(500).json({ error: "Failed to generate real estate video." });
  }
});

export default router;
