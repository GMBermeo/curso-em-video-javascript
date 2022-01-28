var numeros = [];
var resultados = document.getElementById("res")


function adicionar() {
    let num = document.getElementById("numero");
    if (num.value > 100 || num.length == 0 || num.value < 1) {
        window.alert("Número inválido!");
    } else if (numeros.indexOf(num.value) !== -1) {
        window.alert("Número repetido!");
    }
    else {
        numeros.push(num.value);
        let resultado = document.getElementById("array")
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        resultado.appendChild(item);
        resultados.innerHTML = "";
        // window.alert(`${numeros} ${num.value}`)
    }
}

function calcular() {
    numeros.sort();
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let soma = 0;
    for (let c = 0; c < numeros.length; c++) {
        soma += Number(numeros[c]);
    }
    let media = (((soma / numeros.length).toFixed(2)).toLocaleString()).replace(".", ",");

    let respostas = [`Ao todo, temos ${numeros.length} números cadastrados.`,
    `O maior valor informado foi ${maior}.`,
    `O menor valor informado foi ${menor}.`,
    `Somando todos os valores, temos ${soma}`,
    `A média dos valores digitados é ${media}.`
    ]
    for (let r = 0; r < respostas.length; r++) {
        resultados.innerHTML += `<p>` + respostas[r] + `</p>`;
        //resultados.innerHTML += "<p>" + respostas[r] + "</p>";
    }
    // window.alert(`Ao todo temos ${numeros.length} números cadastrados.`)
    // window.alert(`O maior valor informado foi ${maior}.`)
    // window.alert(`O maior valor informado foi ${menor}.`)
    //resultados.innerHTML = respostas;
    // let itemres = document.createElement('p');
    // itemres.text = `Valor ${num} adicionado.`;
    // resultados.appendChild(itemres);
}