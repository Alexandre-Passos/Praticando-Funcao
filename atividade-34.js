/*
Imagine que você está desenvolvendo um sistema de sorteio interativo 
para um evento online. Os participantes se inscrevem com um nome e 
uma pontuação (baseada em atividades realizadas). O sistema deve:

Sortear aleatoriamente um nome da lista de participantes.
Exibir esse nome com um pequeno atraso (como se fosse um suspense).
Avaliar se o participante foi premiado ou não com base na pontuação:
Acima de 80: "Parabéns, você foi premiado!"
Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
Abaixo de 50: "Infelizmente, não foi dessa vez."
Sua missão é criar:

Uma função para sortear um nome aleatoriamente.
Uma função para exibir o nome sorteado com 2 segundos de atraso
Uma função para avaliar a pontuação.
Uma função final que organize o fluxo completo do sorteio.
*/

const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
];

realizarSorteio(participantes);

function realizarSorteio(participantes) {
    escolha = Math.floor(Math.random() * participantes.length)
    jogadorEscolhido = participantes[escolha]
    statusAprovacao(jogadorEscolhido)
}

function statusAprovacao(jogador) {
    const pontuacao = jogador.pontuacao
    const nome = jogador.nome
    if (pontuacao > 80) {
        console.log('Parabéns', nome, 'você foi premiado!');
    } else if (pontuacao >= 50 && pontuacao <= 80) {
        console.log(`Você quase conseguiu! Fique de olho nos próximos sorteios ${nome}.`);
    } else {
        console.log(`Infelizmente, não foi dessa vez ${nome}.`);
    }
}


