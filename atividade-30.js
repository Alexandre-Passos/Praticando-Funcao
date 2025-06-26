/*
Imagine que você está criando uma função que simula o processamento de um pedido em um site. 
Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa 
mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

Sua tarefa é criar uma função chamada processarPedido, que receba dois parâmetros:

o nome do cliente, e uma função de callback responsável por exibir uma mensagem após o pedido ser processado.
*/

function pedidos(nome, cargo, callback) {
    return callback(nome, cargo)
}
function mensagemPersonalizada(nome, cargo) {
    if (cargo === 'vip') {
        return console.log(`Bem-vindo ${nome} ao clube.`)
    }
}
pedidos("Lucas", "vip", mensagemPersonalizada)

