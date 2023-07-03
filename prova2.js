function prova() {
    let titulo = [], descricao = [], usuario = [], qtdLikes = [], usuarioMudanca

    for (let i = 0; i < 10; i++) {
        let autor = prompt("Digite o nome do usuário: ")
        while (usuario.includes(autor)) {
            alert("Usuario já existe no sistema, digite o nome novamente")
            autor = prompt("Digite o nome do usuário: ")
        }
        usuario.push(autor)
        titulo.push(prompt("Digite o titulo do post: "))
        descricao.push(prompt("Digite a descrição do post"))

        let qtdLikesTest = Number(prompt("Digite a quantidade de likes do post: "))
        while (qtdLikesTest < 0) {
            alert("Quantidade inválida, digite novamente")
            qtdLikesTest = Number(prompt("Digite a quantidade de likes do post: "))
        }
        qtdLikes.push(qtdLikesTest)
    }

    for(let i=0;i<5;i++){
        usuarioMudanca = prompt("digite o nome do usuário que será feito a mudança")
        while (!usuario.includes(usuarioMudanca)){
            usuarioMudanca = prompt("digite o nome do usuário que será feito a mudança")
        }
       
        let confirmacao = Number(prompt("Digite 1 para aumentar a quantidade de likes, ou, 2 para diminuir a quantidade"))
        if (confirmacao == 1) {
            let aumento = prompt("Digite a quantidade de likes que deseja aumentar: ")
            qtdLikes[usuario.indexOf(usuarioMudanca)] += aumento
        }
        else {
            let diminuir = prompt("Digite a quantidade de likes que deseja diminuir: ")
            let auxiliar = qtdLikes[usuario.indexOf(usuarioMudanca)] - diminuir
            while (auxiliar < 0) {
                alert("Quantidade de likes ficará negativa, digite novamente outro valor")
                diminuir = prompt("Digite a quantidade de likes que deseja diminuir: ")
                auxiliar = qtdLikes[usuario.indexOf(usuarioMudanca)] - diminuir
            }
            qtdLikes[usuario.indexOf(usuarioMudanca)] = auxiliar
        }
    }   

    let maiorQtd = qtdLikes[0] 
    for (let i = 0; i < 10; i++) {
        if (qtdLikes[i] > maiorQtd) {
            maiorQtd = qtdLikes[i];
        }
    }

    let menorQtd = qtdLikes[0] 
    for (let i = 0; i < 10; i++) {
        if (qtdLikes[i] < menorQtd) {
            menorQtd = qtdLikes[i];
        }
    }

    let imaiorQtd = qtdLikes.indexOf(maiorQtd)
    let imenorQtd = qtdLikes.indexOf(menorQtd)

    console.log(`O titulo do programa com a maior quantidade de likes é o: ${titulo[imaiorQtd]}\ncom a seguinte descrição: \n${descricao[imaiorQtd]}\n`)
    console.log(`O titulo do programa com a menor quantidade de likes é o: ${titulo[imenorQtd]}\ncom a seguinte descrição: \n${descricao[imenorQtd]}`)
}



