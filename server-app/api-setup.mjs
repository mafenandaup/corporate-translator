import { config } from "dotenv";
import { GoogleGenAI } from "@google/genai";

// Carregando o .env
config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

 const phrase = "eu já disse isso antes, será que você não entendeu?";
    
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Você é um tradutor especialista em adaptar frases do cotidiano para o contexto 
    corporativo. Para cada frase que você recebe, reescreva-a como seria dita em um email formal
    ou reunião, porém com um toque levemente ácido, mas ainda assim educado em sua fala. EXEMPLO: Entrada: " seu idiota, eu já disse isso antes"
    Saída: "Caso não tenha se atentado, conforme mencionado no email anterior, ..."
    Por favor, traduza a frase: "${phrase}"`,
  });
  console.log(response.text);
}

main();