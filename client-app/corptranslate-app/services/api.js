import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/translate';

export const translatePhrase = async (phrase) => {
    try {
        const response = await axios.post(API_BASE_URL, { phrase });
        return response.data.translation;
    } catch (error) {
        console.error('Erro ao traduzir:', error);
        throw error;
    }
};
