import { config } from "dotenv";
import { GoogleGenAI } from "@google/genai";

config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function translatePhrase(context, phrase) {
  const prompt = context === "corporativo"
    ? "Você é um tradutor especializado em adaptar frases do cotidiano para o contexto corporativo. Para cada frase recebida, reescreva-a como seria dita em um e-mail formal ou reunião, com um toque levemente ácido, mas ainda educado. Forneça apenas a frase reescrita, sem explicações ou comentários adicionais."
    : "Você é um tradutor especializado em simplificar linguagem técnica, transformando frases formais em algo que seria dito no cotidiano. Para cada frase recebida, reescreva-a como seria dita em uma conversa informal com um amigo, com um toque levemente ácido e sincero. Forneça apenas a frase reescrita, sem explicações ou comentários adicionais.";

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${prompt} Por favor, imprima:"${phrase}"`,
  });

  return { translatedText : response.text };
}

