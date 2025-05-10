console.log('hi')

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBekjZOwNbb1C9rW75WLncw7C43K4Hq5uI" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "você pode entender quando eu falo algo em português?",
  });
  console.log(response.text);
}

main();