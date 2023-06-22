const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true})); //linha necessaria para ler a req pelo body

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/mostraDados", (req, res) => {
    const {nome, sobrenome} = req.query;
    res.render("mostraDadosGet", {nome, sobrenome});
});

app.post("/mostraDados", (req, res) => {
    const {nome, sobrenome} = req.body;
    res.render("mostraDadosPost", {nome, sobrenome});
});

app.listen(3000, () => {
    console.log("Server ligado na porta 3000.");
});
