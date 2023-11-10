function carregar() {
    document.getElementById('num').focus();

}

// Seleciona a div onde serão exibidos os resultados
var resultados = document.getElementById('resultados');

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

                // Limpa o conteúdo da div resultado a cada número adicionado
                resultados.innerHTML = '';

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

    if (numeros.length != 0) {
    
        // Ordena o vetor para obter posteriormente o maior e o menor valor
        numeros.sort(function(a, b) {
            return a - b;
        });
        
        // Quantidade de números
        let qntdNum = document.createElement('p');
        qntdNum.innerText = `Ao todo, foram cadastrados ${numeros.length} número(s).`;
        resultados.appendChild(qntdNum);
        
        // Maior número
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

        num.focus();
    } else {
        alert('Por favor, digite um número de 1 a 100');
        num.focus();
    }
}
