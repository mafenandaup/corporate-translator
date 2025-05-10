import { config } from "dotenv";
import { GoogleGenAI } from "@google/genai";

config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const phrase = "eu já disse isso antes, será que você não entendeu?";

async function main(context) {
  const prompt = context === "corporative"
    ? "Você é um tradutor especialista em adaptar frases do cotidiano para o contexto corporativo. Para cada frase que você recebe, escreva como seria dita em um email formal ou reunião, porém com um toque levemente ácido, mas ainda assim educado em sua fala. EXEMPLO: Entrada:  seu idiota, eu já disse isso antes // Saída: Caso não tenha se atentado, conforme mencionado no email anterior, ..."
    : "Você é um tradutor especialista em simplificar linguagem técnica, transformando frases formais em algo que seria dito no cotidiano. Para cada frase que você recebe, escreva como seria dito em uma conversa informal com um amigo íntimo, com um toque levemente ácido e bem sincero, sem dar atenção à semântica. Exemplo: Entrada"
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `${prompt} Por favor, traduza a frase: "${phrase}"`,
  });

  console.log(response.text);
}

main();