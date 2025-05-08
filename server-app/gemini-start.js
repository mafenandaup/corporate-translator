import dotenv, { config } from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config();

const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);