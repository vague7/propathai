import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "propathai", // Unique app ID
  name: "ProPathAI", // App name
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});