import express from "express";
import { translatePhrase } from "./api-setup.mjs";
import cors from 'cors';

const appCorpTranslate = express();

appCorpTranslate.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

appCorpTranslate.use(express.json());


appCorpTranslate.post("/api/translate", async (req, res) => {
    const { context, phrase } = req.body;
    try {
        const result = await translatePhrase(context, phrase);
        res.json({ translatedText: result });
    } catch (error) {
        console.error("Erro ao traduzir:", error);
        res.status(500).json({ error: "Erro ao traduzir" });
    }
});

appCorpTranslate.listen(3000, () => {
  console.log("Funcionando!");
});

