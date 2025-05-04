import express from 'express'

const appCorpTrans = express();
const translationRoute = require("./services/translate")
appCorpTrans.use(cors());
appCorpTrans.use(express.json());

appCorpTrans.use('/api/translate', translationRoute);

appTranslateRoutes.listen(5000, console.log("Server started on port 5000"));