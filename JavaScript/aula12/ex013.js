var diaSemana = new Date().getDay();
//var daysWeek = now.getDay();
/*
    domingo = 0
    segunda = 1
    terça = 2
    quarta = 3
    quinta = 4
    sexta = 5
    sábado = 6
*/
//console.log(diaSemana);
switch(diaSemana) {
    case 0:
        console.log('Domingo');
        break;
    case 1: 
        console.log('Segunda-feira');
        break;
    case 2:
        console.log('Terça-feira');
        break;
    case 3:
        console.log('Quarta-feira');
        break;
    case 4:
        console.log('Quinta-feira');
        break;
    case 5:
        console.log('Sexta-feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('[ERRO]! Dia inválido!');
        break;
}