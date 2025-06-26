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