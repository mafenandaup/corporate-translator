import dotenv, { config } from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config();

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function translate() {
    const phrase = "eu já disse isso antes, será que você não sabe como falar?"
    const model = new GoogleGenerativeAI({ model: "gemini-lite" })
    
    const prompt = `Você é um tradutor especialista em adaptar frases do cotidiano para o contexto 
    corporativo. Para cada frase que você recebe, reescreva-a como seria dita em um email formal
    ou reunião, porém com um toque levemente ácido e sarcástico em sua fala. EXEMPLO: Entrada: " seu idiota, eu já disse isso antes"
Saída: "Caso não tenha se atentado, conforme mencionado no email anterior, ..."
    Por favor, traduza a frase: "${phrase}"`
    
    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        return response.text();
      } catch (error) {
        console.error('Erro ao acionar a API:', error);
        throw new Error('Tradução falhou.');
      }
    }
