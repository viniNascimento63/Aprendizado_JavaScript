//var momentoAgora = new Date();
var hora = new Date().getHours();
//var hora = momentoAgora.getHours();
console.log(`Agora são exatamente ${hora} horas.`);
if (hora < 12) {
    if (hora < 6) {
        console.log('Boa madrugada!');
    } else {
        console.log('Bom dia');
    }
} else if (hora < 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}