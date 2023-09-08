/*
(1°) O programa exibirá uma sequência de números.
(2°) No documento há três formulários: "início", "fim" e "intervalo", respectivamente.
(3°) O "início" indica por qual número a sequência deverá começar; o "fim" indica em até qual número a sequência irá;
e o terceiro, indicará o intervalo entre os números da sequêcia: 1 em 1, 2 em 2, 3 em 3, etc...

emoji da bandeirinha &#x1F3C1;
*/
/*
function abrirTeclado() {
    var inicio = document.querySelector('input#inptIn');
    inicio.focus();
}
function contar() {
    var res = document.getElementById('res');
    var inicio = document.querySelector('input#inptIn');
    var valorIn = parseInt((inicio.value));
    var fim = document.querySelector('input#inptFm');
    var valorFm = parseInt((fim.value));
    var intervalo = document.querySelector('input#inptInt');
    var valorInt = parseInt((intervalo.value));
    var seq = document.querySelector('div#seq'); 

    if (isNaN(valorIn)) { // testa se o formulário "inicio" está vazio.
        alert('[ERRO] Digite um número no formulário de início!');
        inicio.focus();
    } else if (valorInt == 0 || isNaN(valorInt)) { // testa se o intervalo entre os números é 0 ou se nada foi digitado.
        alert('[ERRO] Intervalo inválido! Consirando intervalo como 1!');
        intervalo.value = 1;
        valorInt = 1;
        fim.focus();
    }

    seq.innerText = ''; // apaga a contagem se já foi feito outra anteriormente
    
    do { 
        res.innerText = 'Contando:';
        seq.innerHTML += ` ${valorIn} &#128073; `; // adiciona à div 'seq' o valor contido em 'inicio'. Depois o valor de 'inicio' é mostrado em 'seq' junto de um emoji.
        
        if (valorIn < valorFm) { // O valor do 'inicio' só será incrementado se for menor que o valor do 'fim'.
            valorIn += valorInt; 
        } else { 
            seq.innerHTML += '&#x1F3C1;';
            break; // A repetição será interrompida quando o valor do 'inicio' for igual ou maior que o valor do 'fim'.
        }

        console.log(valorIn);
    } while(valorIn <= valorFm);
}
*/

// -- RESOLUÇÃO CURSO EM VÍDEO

function digitar () {
    document.getElementById('txtIni').focus();
}
function contar () {
    let ini = window.document.getElementById('txtIni');
    let fim = window.document.getElementById('txtFim');
    let passo = window.document.getElementById('txtPss');
    let res = window.document.getElementById('res');
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert('[ERRO] Faltam dados!');
        res.innerHTML = `Impossível contar \u{1F611}`;
        if (ini.value.length == 0) {
            ini.focus();
        } else if (fim.value.length == 0) {
            fim.focus();
        } else {
            passo.focus();
        }
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        
        if (p <= 0) {
            alert('Passo inválido! Considerando passo como 1');
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                // Contagem crescente
                res.innerHTML += `${c} \u{1F449}`; 
                // No JS a sintax é como está à acima. Código do emoji: U+1F449
                // Os códigos de emojis do UniCode só funcionam entre crases no JS
            } 
        } else {
            for(let c = i; c >= f; c-= p) {
                // Contagem decrescente
                res.innerHTML += `${c} \u{1F449}`;
            }
        }

        res.innerHTML += `\u{1f3C1}`;
    }
}    