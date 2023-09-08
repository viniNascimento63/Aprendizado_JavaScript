function tecladoDigitar() {

    var num = window.document.getElementById('num');
    var calcula = document.getElementById('calcula');
    calcula.addEventListener('click', calcular);
    var lista = document.getElementById('lista');
    num.focus();

    function calcular() {

        // testa se o campo está vazio
        if (num.value == "") { 

            alert('Insira um número no campo abaixo!');
            num.value = "";
            num.focus();

        } else {

            let n = num.value;
            // Adiciona dinamicamente elementos à lista
            for (var i = 1; i <= 10; i++) {
                let item = document.createElement('option');
                item.innerText = `${n} x ${i} = ${n * i}`;
                lista.appendChild(item);
            }
            
        }
    }
}