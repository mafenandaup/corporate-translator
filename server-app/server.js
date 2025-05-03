import express from 'express'

const appTestRoutes = express();

appTestRoutes.use("/testroutes", (req, res) => {
    res.send("Ok, está funcionando")
})

appTestRoutes.listen(5000, console.log("Server started on port 5000"));