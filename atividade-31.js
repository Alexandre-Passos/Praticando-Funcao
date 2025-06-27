/*
Imagine que você está desenvolvendo uma interface de atendimento online.
Quando o usuário envia uma pergunta, o sistema precisa simular 
que está "pensando" ou "processando a resposta", e só depois exibir a resposta final.

Sua tarefa é criar uma função chamada responderUsuario, que receba dois parâmetros:

o nome do usuário, e uma função de callback que será executada após 3 segundos.
*/
const processamento = (nome = 'anonimo', callback) => {
    console.log('Aguarde a sua resposta...');

    setTimeout(() => {
        return callback(nome)
    }, 3000)
}

function pergunta(nome) {
    return console.log(`${nome}, seu resultado é: RESPOSTA`)
}

processamento('Alexandre', pergunta)