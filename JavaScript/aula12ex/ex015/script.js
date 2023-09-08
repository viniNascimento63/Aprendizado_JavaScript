function verificar() {
    var data = new Date(); // new Date() pega dados como data e hora além de outros relacionados
    var ano = data.getFullYear(); // pega os quatro dígitos do ano
    var txtAno = window.document.getElementById('txtano');
    var anoNas = parseInt((txtAno.value)); // converte o valor digitado no input txtano para número inteiro
    var res = window.document.getElementById('res');
    var foto = window.document.getElementById('foto');
    var img = document.createElement('img'); // cria um elemento html (img) através do JS
    img.setAttribute('id','img'); // adiciona um id de nome 'foto' ao elemento img criado na linha acima

    if (anoNas == 0 || anoNas > ano) {
        window.alert('[ERRO] Verifique os dados e digite novamente'); // primeira verificação: usuário tem de inserir um ano acima de 0 e menor que ano atual
    } else {
        var radsex = window.document.getElementsByName('radsex'); // traz através do DOM o input tipo radio com nome "radsex"
        var idade = ano - anoNas; // calcula a idade: ano atual - ano de nascimento
        if (radsex[0].checked) { // codição que verifica se há marcação em 0
            var genero = 'homem';
            if (idade <= 12) { 
                img.setAttribute('src','crianca-m.png');
            } else if (idade < 20) {
                img.setAttribute('src','adolescente-m.png');
            } else if (idade < 35) {
                img.setAttribute('src','jovem-m.png');
            } else if (idade < 60) {
                img.setAttribute('src','adulto-m.png');
            } else {
                img.setAttribute('src','idoso-m.png');
            }
        } else {
            genero = 'mulher';
            if (idade <= 11) { 
                img.setAttribute('src','crianca-f.png');
            } else if (idade < 20) {
                img.setAttribute('src','adolescente-f.png');
            } else if (idade < 35) {
                img.setAttribute('src','jovem-f.png');
            } else if (idade < 60) {
                img.setAttribute('src','adulto-f.png');
            } else {
                img.setAttribute('src','idoso-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `<p>Detectado ${genero} de ${idade} anos.</p>`;
        res.appendChild(img); // coloca esse img criado dentro da div foto, senão ele (o img) não aparecerá 
    }
}