function geraMilDivisoes(dividendoMin, divisorMin) { //gera mil possibilidades de divisões a partir de um dividendo mínimo e um divisor mínimo.
    const lista = []; //cria array da lista de divisões

    for(let i = dividendoMin; i <= (dividendoMin + 1000); i++) { //loop passando dividendo
        for(let j = divisorMin; j <= (divisorMin + 1000); j++) { //loop passando divisores para cada dividendo
            if(i != j && (i % j) == 0) { //confere se a divisão é exata
                lista.push(i+" / "+j); //se for exata, "empurra" pra dentro do array de divisões
            }
        }
    }

    return lista; //retorna lista com mil divisões exatas
}

function geraLista(listaMil, qtdExercicios) { //recebe por parâmetro o array de mil, depois a quantidade de exercícios que quer gerar na lista
    let listaCropada = []; //lista para inserir as divisões aleatórias
    
    for(let i = 0; i < qtdExercicios; i++) { //loop para rodar a quantidade de exercícios passados por parâmetro
        listaCropada.push(listaMil[Math.floor(Math.random() * 1001)]); //insere uma divisão aleatória da lista de mil na lista cropada
    }

    return listaCropada; //retorna lista com x divisões aleatórias da lista de mil
}

console.log(geraLista(geraMilDivisoes(100, 20), 10));

function geraLista() {
    let listData = geraLista(geraMilDivisoes(100, 20), 10);

    let listContainer = document.querySelector('.container-lista');

    let listElement = document.createElement('ol');

    let listItem = document.createElement('li');

    document.body.appendChild(listContainer);
    listContainer.appendChild(listElement);
    
    let numberOfListItems = listData.length;

    for (let i = 0; i < numberOfListItems; i++) {
        listItem.textContent = listData[i];
        listElement.appendChild(listItem);

        listItem = document.createElement('li');
    }
}

geraLista();
