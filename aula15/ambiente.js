let num = [5, 6, 4];

console.log(`nosso vetor é o ${num}`);

num[3] = 8;
num.push(7);
//num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);

console.log(`O primeiro valor do vetor é ${num[0]}`);

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}