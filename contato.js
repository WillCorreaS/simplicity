'use strict'
// console.log("olá");

// Selecionando os ELEMENTOS do HTML

const formulario = document.querySelector("form");
const campoCep = document.querySelector("#cep");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const botaoBuscar = document.querySelector("#buscar");
const mensagem = document.querySelector("#mensagem");


// Detectando quando o botão CEP for acionado
botaoBuscar.addEventListener("click", function(event){
    
    /*'event.preventDefault();' Anula comportamento padrão de recattegar página quando um botão, link ou formulário for acionado*/
    event.preventDefault();

    
})

