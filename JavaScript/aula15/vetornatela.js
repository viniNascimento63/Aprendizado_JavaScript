let valores = [9, 4, 2, 6, 1, 3];
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`);
}
*/

for (let pos in valores) {
    console.log(`A posição de ${pos} tem valor ${valores[pos]}`);
}
// n.indexOf() verificará se há o elemento 2 no array e retornará o índice desse elemento
console.log(valores.indexOf(3)); 

// se for dado um elemento inexistente para o indexOf(), será retornado o valor -1
console.log(valores.indexOf(8));