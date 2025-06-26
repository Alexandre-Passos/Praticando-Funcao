function soma(a, b) {
    return a + b
}
function multiplicacao(a, b) {
    return a * b
}

function resultado(equacao, a, b) {
    return equacao(a, b)
}

console.log(resultado(soma, 5, 3))

const seuID = '37291401'

const tempoEsgotado = ID => console.log('O tempo do Úsuario', ID, 'Foi esgotado');
setTimeout(tempoEsgotado, 2000, seuID)
