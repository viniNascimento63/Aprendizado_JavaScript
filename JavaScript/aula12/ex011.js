var idade = 15;
console.log(`Você tem ${idade} anos.`);
if (idade < 16) {
    console.log('NÃO VOTA.');
} else if (idade < 18 || idade >= 70) { //else if economiza espaço e diminui a poluição visual
    console.log('Voto OPCIONAL.');
} else {
    console.log('Voto OBRIGATÓRIO.');
}