
function calcular() {
    let inicio = window.document.getElementById("inicio");
    let fim = window.document.getElementById("fim");
    let passo = window.document.getElementById("passo");
    let resultado = window.document.getElementById("resultado");

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || passo == 0) {
        resultado.innerHTML = "Impossível contar!"
        window.alert("Erro! Faltam dados");
    }
    else {
        resultado.innerHTML = `Contando:<br>`
        inicio = Number(inicio.value);
        fim = Number(fim.value);
        passo = Number(passo.value);

        if (passo <= 0) {
            passo = 1;
        };
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c} \u{1F449} `;
            }
        } else
            for (let c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += `${c} \u{1F449} `;
            }

        resultado.innerHTML += `FIM \u{270B} `

    }
}