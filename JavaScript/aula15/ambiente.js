let num = [5, 8, 2, 9, 3];
console.log(`Nosso vetor é ${num}`);
console.log(`O primeiro elemento do vetor é ${num[0]}`);
// adiciona o elemento 7 a um índice específico do vetor, que, nesse caso, é o índice 5
num[5] = 7; 
console.log(`Nosso vetor é ${num}`);
// adiciona automaticamente o elemento 1 ao último índice do vetor
num.push(1); 
console.log(`Nosso vetor é ${num}`);
// num.length mostrará a quantidade de elementos dentro do array "num"
console.log(`Nosso vetor tem ${num.length} elementos.`);
// num.sort() organizará os elementos do array em ordem crescente
num.sort();
console.log(`Nosso vetor agora é ${num}`);