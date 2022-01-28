function calcular() {
    let num = document.getElementById("numero");
    let resultado = document.getElementById("tabuada");

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número');
    } else {
        let n = Number(num.value);
        let c = 1;
        resultado.innerHTML = '';
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${c} x ${n} = ${n * c}`;
            item.value = `tabuada de ${c}`;
            resultado.appendChild(item);
            c++;
        }
    }
}