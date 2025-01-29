//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    
    if (nome.trim() === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        console.log(amigos);
        limparCampo();
    }
}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}