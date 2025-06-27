/*
Sua missão é criar uma função chamada contagemRegressiva que:

Receba um número inteiro positivo (ex: 5)
Imprima esse número e, a cada chamada, reduza em 1
Quando chegar em 0, exiba a mensagem: "Lançamento!"
A função deve ser implementada de forma recursiva, sem usar loops (for ou while).
*/

function numeroReduzidoEmUM(inteiro) {
    console.log(inteiro);
    if (inteiro === 0) {
        return 'acabou'
    } else {
        let menosUM = numeroReduzidoEmUM(inteiro - 1)
    }
}
console.log(numeroReduzidoEmUM(5));
