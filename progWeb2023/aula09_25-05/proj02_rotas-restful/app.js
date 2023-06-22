const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

let animais = [
    {
        especie: 'Gato',
        idade: '12',
        porte: 'pequeno'
    },
    {
        especie: 'Cachorro',
        idade: '7',
        porte: 'grande'
    },
    {
        especie: 'Pato',
        idade: '3',
        porte: 'pequeno'
    }
]

app.get("/", (req, res) => {
    res.redirect("/animais");
});

app.get("/animais", (req, res) => {
    res.render("index", {animais});
});

app.get("/animais/new", (req, res) => {
    res.render("new");
});

app.post("/animais", (req, res) => {
    const {especie, idade, porte} = req.body;
    animais.push({especie: especie, idade: idade, porte: porte})
    res.redirect("/animais")
});

app.get("/animais/:especie", (req, res) => {
    const {especie} = req.params;
    const animal = animais.find(animal => animal.especie == especie)
    res.render("show", {animal});
});

app.get("/animais/:especie/edit", (req, res) => {
    const {especie} = req.params;
    const animal = animais.find(animal => animal.especie == especie);
    res.render("edit", {animal});
});

app.patch("/animais/:especie", (req, res) => {
    const {especie} = req.params;
    const {idade, porte} = req.body;
    const animal = animais.find(animal => animal.especie == especie);
    animal.idade = idade;
    animal.porte = porte;
    res.redirect("/animais/" + especie);
})

app.delete("/animais/:especie", (req, res) => {
    const {especie} = req.params;
    animais = animais.filter(animal => animal.especie != especie);
    res.redirect("/animais");
});

app.listen(3000, () => {
    console.log("Server ligado na porta 3000.")
});
