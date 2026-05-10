const prompt = require('prompt-sync')()
const Livro = require('./Livro')

const livros = []
let opcao;

while(true) {
    console.log('--- Biblioteca ---')
    console.log('1 - Cadastrar livro')
    console.log('2 - Listar livros')
    console.log('3 - Alterar Livro')
    console.log('4 - Estatísticas')
    console.log('0 - Sair')
    opcao = parseInt(prompt('Digite um número:'))
    if(isNaN(opcao)) {
        console.log('Você deve digitar apenas números, tente novamente.')
        continue
    }
    break
}