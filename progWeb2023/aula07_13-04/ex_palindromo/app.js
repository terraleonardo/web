const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/palindromo', (req, res) => {
    const palavra_original = req.query.q;
    let palavra_invertida = "";
    let palindromo = false;

    for (let i = (palavra_original.length - 1); i >= 0; i--) {
        palavra_invertida += palavra_original[i];
    }

    //alternativa com método split e reverse
    //palavra_invertida = palavra_original.split('').reverse().join('');

    palindromo = (palavra_original.toLowerCase() == palavra_invertida.toLowerCase());

    res.render('palindromo', {palavra_original, palavra_invertida, palindromo})
})

app.listen(3000, () => {
    console.log("Server ligado na porta 3000!")
})
