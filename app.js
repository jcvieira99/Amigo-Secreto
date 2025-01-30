let amigos = [];//Aqui, uma variável chamada amigos é declarada como um array vazio. Este array será usado para armazenar os nomes dos amigos adicionados.

function adicionarAmigo() {
    let nome = document.querySelector('input').value;//Obtém o valor do campo de entrada (input) no documento HTML.
    
    if (nome.trim() === "") {//Verifica se o campo de entrada está vazio (após remover espaços em branco). Se estiver, exibe um alerta pedindo para inserir um nome.
        alert("Por favor, insira um nome.");
    } else {//Se o campo não estiver vazio:
        amigos.push(nome);//Adiciona o nome ao array amigos
        console.log(amigos);//Exibe o array amigos no console.
        limparCampo();//Chama a função limparCampo para limpar o campo de entrada.
        adicionarAmigosNaLista(amigos);//Chama a função adicionarAmigosNaLista para atualizar a lista de amigos exibida.
    }
}

function limparCampo(){
    nome = document.querySelector('input');//Seleciona o campo de entrada no documento HTML.
    nome.value = '';//Limpa o valor do campo de entrada, definindo-o como uma string vazia.
}

function adicionarAmigosNaLista(amigos){
    const lista = document.getElementById("listaAmigos");// Seleciona o elemento HTML com o id listaAmigos.
   lista.innerHTML = "";//Limpa o conteúdo HTML do elemento listaAmigos.

    for (let i = 0; i < amigos.length; i++){ //altera sobre o array amigos e adiciona cada nome como um item de lista (<li>) ao elemento listaAmigos.
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}