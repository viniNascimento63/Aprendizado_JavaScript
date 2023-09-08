function carregar() {
    document.getElementById('num').focus();

}
function adicionar() {
    let num = document.getElementById('num');
    if (num.value == NaN || num.value.length == 0) {
        alert('Valor inválido ou já encontrado na lista!');
        num.focus();
    } else {

    }
}