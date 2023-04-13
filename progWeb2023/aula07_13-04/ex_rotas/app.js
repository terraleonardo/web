//Leonardo Terra dos Santos - 401 Info
const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/nome/:nome", (req, res) => {
    const {nome} = req.params;
    res.render('nome', {nome});
});

app.get("/repetir/:palavra/:vezes", (req, res) => {
    const {palavra, vezes} = req.params;
    let texto = "";
    for(let i = 0; i < vezes; i++) {
        texto +=  " " +palavra;
        
    }
    res.render('repetir', {texto})
});

app.get('/som/:animal', (req,res) => {
    const sons = {
        cao: "Auuu Auuu Auuu",
        gato: "Miauuu",
        vaca: "Moon",
        ovelha: "Meeeee",
        cavalo: "Rhiiiii"
    }
    const artigos = {
        cao: "O",
        gato: "O",
        vaca: "A",
        ovelha: "A",
        cavalo: "O"
    }
    const imagens = {
        cao: "cao.jpg",
        gato: "gato.jpg",
        vaca: "vaca.jpg",
        ovelha: "ovelha.jpg",
        cavalo: "cavalo.jpg"
    }
    const {animal} = req.params
    const artigo = artigos[animal]
    const som = sons[animal]
    const imagem = imagens[animal]
    let resposta = ""
    if (som == undefined){
        res.send("Animal desconhecido.")
    } else {
        resposta = (`${artigo} ${animal} faz ${som}.`)
    }
    res.render('animais', {resposta, imagem});
})

app.get("/rep", (req, res) => {
    const { p, q } = req.query;
    let texto = ""
    for(var i = 0; i < q; i++) {
        texto += " " + p;
    }
    res.render('repetir', {texto})
});

app.get("*", (req, res) => {
    res.render('notfound')
});


app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000");
});
