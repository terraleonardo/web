function print(str, qtd) {
    for(let i = 0; i<qtd; i++) {
        console.log(str);
    }
}

let printArrow = (str, qtd) => {
    for(let i = 0; i< qtd; i++) {
        console.log(str);
    }
}

let calculaMedia = (notas) => {
    let soma = 0;
    notas.forEach((nota) => {
        soma += nota
    })
    
    return (soma/notas.length).toFixed(1)
}

/*print("string wowowoaaaaaaaa", 7)
printArrow("asdkjcnej", 5)*/
let notas = [9.2, 8.7, 7.9]
console.log(calculaMedia(notas));