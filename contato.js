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
const mensagemStatus = document.querySelector("#status");
const mensagem = document.querySelector("#mensagem");


// Detectando quando o botão CEP for acionado
botaoBuscar.addEventListener("click", function(event){
    
    /*'event.preventDefault();' Anula comportamento padrão de recattegar página quando um botão, link ou formulário for acionado*/
    event.preventDefault();

    let cepInformado;

    //para verificar se CEP contém 8 digitos
    if (campoCep.value.length !== 8) {
        mensagemStatus.textContent = "Digite um CEP válido"
        mensagemStatus.style.color = "purple"
        return;
    } else{
        cepInformado = campoCep.value;
        /*AJAX (assyncronous javascript and XML)
        
        É uma tecnica de comunicação de Transmição/recebimento de dados que permite o processamento em conjunto com APIs (ou Wen Services)
        */

        /*###############  COMO UTILIZAR  ############*/

        //ETAPA 1: preparar a URL da API com o CEP informado

        
        //ETAPA 2: acessar a API (com url) e aguardar o retorno dela


        //ETAPA 3: extrair os dados da resposta da API em formato JASON
        

        //ETAPA 4:lidar com os dados (em caso de erro ou sucesso)

    
    }
})

