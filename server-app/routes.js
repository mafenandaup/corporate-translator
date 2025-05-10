import express from "express";
import { translatePhrase } from "./api-setup.mjs";

const appCorpTranslate = express();

appCorpTranslate.use(express.json());

appCorpTranslate.post("/api/translate", async (req, res) => {
    console.log("Corpo da requisição:", req.body);
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
