// import dotenv, { config } from "dotenv";
// import { GoogleGenerativeAI } from "@google/generative-ai"

// dotenv.config();

// const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const generativeSettings = {temperature : 0.9, topP}

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();