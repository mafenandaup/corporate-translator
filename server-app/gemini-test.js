import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const generativeAI = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });
console.log("API Key:", process.env.GEMINI_API_KEY);


async function translate() {
    const phrase = "eu já disse isso antes, será que você não sabe como falar?";
    
    const prompt = `Você é um tradutor especialista em adaptar frases do cotidiano para o contexto 
    corporativo. Para cada frase que você recebe, reescreva-a como seria dita em um email formal
    ou reunião, porém com um toque levemente ácido e sarcástico em sua fala. EXEMPLO: Entrada: " seu idiota, eu já disse isso antes"
    Saída: "Caso não tenha se atentado, conforme mencionado no email anterior, ..."
    Por favor, traduza a frase: "${phrase}"`;

    try {
        // const result = await generativeAI.generateContent({ prompt });
      // return result.text;
      console.log("API Key:", process.env.GEMINI_API_KEY);
    } catch (error) {
        console.error("Erro ao acionar a API:", error);
        throw new Error("Tradução falhou.");
    }
}

translate()
    .then(response => console.log("Resposta traduzida:", response))
    .catch(error => console.error(error.message));

