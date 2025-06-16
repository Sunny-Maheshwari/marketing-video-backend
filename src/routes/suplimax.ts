import express, { Request, Response } from "express";
import { generateGeminiVideo } from "../services/gemini";

const router = express.Router();

router.post("/", async (req: any, res: any) => {
  const { features, tone, audience, style } = req.body;

  const prompt = `Create a ${style} style 30-second marketing video for Suplimax energy drink.Include a product image that clearly shows the Suplimax logo.
    useCase: "suplimax",
  Features: ${features}
  Tone: ${tone}
  Target Audience: ${audience}
    Scene suggestions and dynamic text are encouraged.`;

  try {
    const videoUrl = await generateGeminiVideo(prompt, {
      useCase: "suplimax",
      tone,
      style,
    });
    return res.json({ videoUrl });
  } catch (error) {
    console.error("Error generating video:", error);
    return res.status(500).json({ error: "Video generation failed" });
  }
});

export default router;
