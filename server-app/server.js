import express from 'express'

const appCorpTrans = express();
const translationRoute = require("./services/translate")
appCorpTrans.use(cors());
appCorpTrans.use(express.json());


// o use monta uma subrota ou middleware para a aplicação, que nesse caso é a translationRoute
//rota importada do translate.JS.
appCorpTrans.use('/api/translate', translationRoute);

// mensagem de teste para verificar se o server está funcionando
appTranslateRoutes.listen(5000, console.log("servidor rodando na porta 5000"));