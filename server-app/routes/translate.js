const express = require('express');
const { translateToCorporate } = require('../services/geminiService');

const router = express.Router();

router.post('/', async (req, res) => {
    const { phrase } = req.body; 
    // a frase se torna o corpo da requisição, e quando a função assíncrona de traduzir no geminiServices
    // for executada, o JSON da resposta se tornará a tradução feita pela ia.
    //caso contrário, será posta em display uma mensagem de erro.
  try {
    const translation = await translateToCorporate(phrase);
    res.json({ translation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
