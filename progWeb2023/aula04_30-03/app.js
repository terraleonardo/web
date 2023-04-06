const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const numero = Math.ceil(Math.random() * 10);
    const par = numero % 2 == 0;
    res.render('home.ejs', {numero, par});
    
    /* const rand = Math.ceil(Math.random() * 10);
    res.render('home.ejs', {numero: rand}); */ //caso a variável declarada não seja igual ao parâmetro de render
});

app.get('/nome/:nome', (req, res) => {
    const {nome} = req.params;
    const {idade} = req.query;
    res.render('nome.ejs', {nome, idade});
})

app.get('/cursos', (req, res) => {
    const cursos = ["ADS", "TPG", "Lic. Matemática", "Lic. Letras", "EMI Info", "EMI Adm", "Panificação"];
    res.render('cursos', {cursos});
})

app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000")
});
