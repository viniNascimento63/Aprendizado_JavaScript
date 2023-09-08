function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var msg2 = document.getElementById('msg2');
    var hora = new Date().getHours();

    if (hora == 1) { // testa se usa a palavra "hora" ou "horas" (plural)
        msg.innerHTML = `Agora é ${hora} hora.`;
    } else {
        msg.innerHTML = `Agora são ${hora} horas.`;
    }
    if (hora >= 0 && hora < 12) { // testa se é de manhã
        if (hora < 6) { // testa se é de madrugada
            img.src = 'boamadrugada.png';
            msg2.innerHTML = 'Boa madrugada!';
            document.body.style.background = '#030102';
        }
        img.src = 'fotomanha.png';
        msg2.innerHTML = 'Bom dia!';        
        document.body.style.background = '#fded01';
    } else if (hora < 18) { // testa se é de tarde
        img.src = 'fototarde.png';
        msg2.innerHTML = 'Boa tarde!';
        document.body.style.background = '#ff861b';

    } else { // se não é de manhã ou de tarde, é de noite
        img.src = 'fotonoite.png';
        msg2.innerHTML = 'Boa noite!';
        document.body.style.background = '#332944';
    }
}