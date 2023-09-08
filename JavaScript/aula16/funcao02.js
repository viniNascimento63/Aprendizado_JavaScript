// caso n1 e n2 não sejam informados na chamada da função, ambos receberão parâmetros opcionais, que, nesse caso é zero para ambos
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(3, 5));