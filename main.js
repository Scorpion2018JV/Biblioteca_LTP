const prompt = require('prompt-sync')()
const Livro = require('./Livro')

const livros = []

let opcao;
let controleSair = true

let titulo;
let autor;
let genero;
let anoPub;
let numPaginas;
let novoLivro;

while(controleSair) {
    console.log('--- Biblioteca ---')
    console.log('1 - Cadastrar livro')
    console.log('2 - Listar livros')
    console.log('3 - Alterar Livro')
    console.log('4 - Estatísticas')
    console.log('0 - Sair')

    opcao = parseInt(prompt('\nDigite um número: '))

    if(isNaN(opcao)) {
        console.log('\nVocê deve digitar apenas números, tente novamente.')
        continue
    }

    switch(opcao) {
        case 1:
            console.log('\nDigite os dados do livro a ser cadastrado.')
            
            titulo = prompt('Título: ')
            autor = prompt('Autor: ')
            genero = prompt('Gênero: ')
            anoPub = parseInt(prompt('Ano de publicação: '))
            numPaginas = parseInt(prompt('Número de páginas: '))

            novoLivro = new Livro(titulo, autor, genero, anoPub, numPaginas)

            livros.push(novoLivro)

            console.log('\nLivro cadastrado com sucesso!\n')
            break;
        
        case 2:

            break;

        case 3:

            break;

        case 4:

            break;
        
        case 0:
            console.log("\nObrigado por usar nossos serviços!")
            controleSair = false
            break;
    }
}