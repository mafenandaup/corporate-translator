import express from "express";
import { translatePhrase } from "./api-setup.mjs";

const appCorpTranslate = express();
appCorpTranslate.use(express.json());


appCorpTranslate.post("/api/translate", async (req, res) => {
  const { context, phrase } = req.body;
  try {
    const result = await translatePhrase(context, phrase);
    res.json(result);
  } catch (error) {
    console.error("erro ao traduzir:", error);
    res.status(500).json({ error: "erro ao traduzir" });
  }
});

appCorpTranslate.listen(3000, () => {
  console.log("Funcionando!");
});
