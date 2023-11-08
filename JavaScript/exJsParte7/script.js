function carregar() {
    document.getElementById('num').focus();

}

var numeros = [];

function adicionar() {

    let num = document.getElementById('num');

    // Verifica se o campo está vazio ao clicar em "adicionar"
    if (num.value.length == 0) {
        alert('Valor inválido! Digite um número.');
        num.value = '';
        num.focus();
    } 
    else { 
        // Verifica se número é de 1 a 100   
        if (num.value >= 1 && num.value <= 100) {

            // Verifica se o número já está cadastrado
            if (numeros.includes(num.value)) {
                alert('Número já cadastrado! Digite outro número.');
                num.value = '';
                num.focus();
            } 
            else {
                // Cadastra o número 
                let lista = document.getElementById('lista');
                let item = document.createElement('option');
                numeros.push(num.value);
                item.innerText = `Valor ${num.value} adicionado`;
                lista.appendChild(item);
                num.value = '';
                num.focus();
                
            }
            console.log(numeros);
        }
        else {
            alert('Digite um número de 1 a 100.');
            num.value = '';
            num.focus();
        }
    }

}
function finalizar() {

    // Quantidade de números
    let resultados = document.getElementById('resultados');
    let qntdNum = document.createElement('p');
    qntdNum.innerText = `Ao todo, foram cadastrados ${numeros.length} número(s).`;
    resultados.appendChild(qntdNum);
    
    // Maior número
    numeros.sort();
    let maiorNum = numeros[numeros.length-1];
    let maior = document.createElement('p');
    maior.innerText = `O maior número é ${maiorNum}.`
    resultados.appendChild(maior);

    // Menor número 
    let menorNum = numeros[0];
    let menor = document.createElement('p');
    menor.innerText = `O menor número é ${menorNum}.`
    resultados.appendChild(menor);

    // Somatório
    let soma = 0;
    for (i = 0; i < numeros.length; i++) {
        soma += parseInt(numeros[i]);
    }
    let somatorio = document.createElement('p');
    somatorio.innerText = `O soma dos números é ${soma}.`
    resultados.appendChild(somatorio);

    // Média
    let media = soma / numeros.length;
    let mediaNum = document.createElement('p');
    mediaNum.innerText = `A média dos números é ${media.toFixed(2)}`;
    resultados.appendChild(mediaNum);
}
