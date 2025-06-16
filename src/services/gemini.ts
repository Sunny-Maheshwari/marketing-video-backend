import prompts from "../data/prompts.json";

interface PromptMatch {
  useCase?: string;
  tone?: string;
  style?: string;
}

export const generateGeminiVideo = async (
  prompt: string,
  context: PromptMatch
): Promise<string> => {
  console.log("🧠 Matching prompt with:", context);

  await new Promise((resolve) => setTimeout(resolve, 1500));

  for (const item of prompts) {
    const match = item.match;

    const matches =
      (!match.useCase || match.useCase === context.useCase) &&
      (!match.tone || match.tone === context.tone) &&
      (!match.style || match.style === context.style);

    if (matches) {
      console.log("✅ Matched with:", match);
      return item.videoUrl;
    }
  }

  console.log("⚠️ No match found, using default.");
  return "https://media.w3.org/2010/05/sintel/trailer.mp4";
};
