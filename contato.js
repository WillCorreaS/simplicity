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
const campoTelefone = document.querySelector("#telefone");



// Selecionando campos com jQuery e ativar mascara
$(campoCep).mask("00000-000"); //12345-678
$(campoTelefone).mask("(00) 0000-0000"); // (11) 1234-5678



// Detectando quando o botão CEP for acionado
botaoBuscar.addEventListener("click", async function(event){
    
    /*'event.preventDefault();' Anula comportamento padrão de recattegar página quando um botão, link ou formulário for acionado*/
    event.preventDefault();

    let cepInformado;

    //para verificar se CEP contém 8 digitos
    if (campoCep.value.length !== 9) {
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
        let url = `https://viacep.com.br/ws/${cepInformado}/json/`;
        
        //ETAPA 2: acessar a API (com url) e aguardar o retorno dela
        const resposta = await fetch(url);

        //ETAPA 3: extrair os dados da resposta da API em formato JASON
        const dados = await resposta.json()
        console.log(dados);

        //ETAPA 4:lidar com os dados (em caso de erro ou sucesso)
        if ("erro" in dados) {
            mensagemStatus.textContent = "Cep inexistente.";
            mensagemStatus.style.color = "red"
        } else {
            mensagemStatus.textContent = "Cep encontrado.";
            mensagemStatus.style.color = "blue"
        }

        const camposRestantes = document.querySelectorAll(".campos-restantes");
        //remover classe de cada elemento do HTML utilizando um LOOP
        for(const campo of camposRestantes){
            campo.classList.remove("campos-restantes")
        }
        
        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;

    }
})

