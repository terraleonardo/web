function geraMilDivisoes(dividendoMin, divisorMin) {
    const lista = [];

    for(let i = dividendoMin; i <= (dividendoMin + 1000); i++) {
        for(let j = divisorMin; j <= (divisorMin + 1000); j++) {
            if(i != j && (i % j) == 0) {
                lista.push(i+" / "+j);
            }
        }
    }

    return lista;
}

function geraLista(listaInteira, qtdExercicios) {
    let listaCropada = [];
    
    for(let i = 0; i < qtdExercicios; i++) {
        listaCropada.push(listaInteira[Math.floor(Math.random() * 1001)]);
    }

    return listaCropada;
}

console.log(geraLista(geraMilDivisoes(100, 20), 10));

function makeList() {
    let listData = geraLista(geraMilDivisoes(100, 20), 10);

    let listContainer = document.createElement('div');

    let listElement = document.createElement('ol');

    let listItem = document.createElement('li');

    document.body.appendChild(listContainer);
    listContainer.appendChild(listElement);
    
    let numberOfListItems = listData.length;

    for (let i = 0; i < numberOfListItems; ++i) {
        listItem.textContent = listData[i];
        listElement.appendChild(listItem);

        listItem = document.createElement('li');
    }
}

makeList();
