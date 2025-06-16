import express from "express";
import https from "https";

const router = express.Router();

router.get("/", async (req: any, res: any) => {
  const videoUrl = req.query.url as string;

  if (!videoUrl) {
    return res.status(400).send("Missing URL");
  }

  try {
    res.setHeader("Content-Disposition", 'attachment; filename="video.mp4"');
    https.get(videoUrl, (stream) => {
      stream.pipe(res);
    });
  } catch (err) {
    console.error("Download error:", err);
    res.status(500).send("Failed to download");
  }
});

export default router;
