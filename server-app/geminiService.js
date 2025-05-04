const axios = require('axios');

const translateToCorporate = async (phrase) => {
    try {
        const response = await axios.post('https://api.gemini-ai.com/translate', {
            prompt: `Você é um tradutor especialista em adaptar frases do cotidiano para o contexto 
        corporativo. Para cada frase que você recebe, reescreva-a como seria dita em um email formal
        ou reunião, porém com um toque levemente ácido e sarcástico em sua fala. EXEMPLO: Entrada: " seu idiota, eu já disse isso antes"
Saída: "Caso não tenha se atentado, conforme mencionado no email anterior, ..."
        Por favor, traduza a frase: "${phrase}"`,
        });
        return response.data.translation;
    } catch (error) {
        console.error('Erro ao acionar a API API:', error);
        throw new Error('Tradução falha.');
    }
};

module.exports = { translateToCorporate };
