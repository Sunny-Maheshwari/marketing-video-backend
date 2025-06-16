import express from "express";
import { generateGeminiVideo } from "../services/gemini";

const router = express.Router();

router.post("/", async (req: any, res: any) => {
    const { style, property } = req.body;

    const prompt = `Generate a ${style} style video tour for this real estate listing:
Address: ${property.address}
  useCase: "real-estate",
Price: ${property.price}
Bedrooms: ${property.bedrooms}
Bathrooms: ${property.bathrooms}
Square Footage: ${property.sqft}
Features: ${property.features}
Narrate a compelling walkthrough with cinematic visuals.`;

    try {
        const videoUrl = await generateGeminiVideo(prompt, {
            useCase: "real-estate",
            style,
        });
        return res.json({ videoUrl });
    } catch (err) {
        console.error("Error in /real-estate:", err);
        return res.status(500).json({ message: "Video generation failed" });
    }
});

export default router;
