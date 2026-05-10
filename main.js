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

    opcao = parseInt(prompt('\nDigite número um correspondente a uma opção: '))

    if(isNaN(opcao)) {
        console.log('\nVocê deve digitar apenas números, tente novamente.\n')
        continue
    }

    switch(opcao) {
        case 1:
            console.log('\nDigite os dados do livro a ser cadastrado.\n')
            
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
            console.log()

            if (livros.length === 0) {
                console.log('Não há livros cadastrados.\n')
                break
            }

            livros.forEach((livro, indice) => {
                console.log(`${indice + 1}. ${livro.getInfo()}`)
            })

            console.log()
            break;

        case 3:

            break;

        case 4:

            break;
        
        case 0:
            console.log("\nObrigado por usar nossos serviços!")
            controleSair = false
            break;

        default:
            console.log("\nOpção Inválida, tente novamente.\n")
    }
}