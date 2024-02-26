


import { opcoesDeCarros } from "./arrays.mjs";

//window.alert("Resultado no Console")


//window.alert('Os valores podem não ser exatos, tanto pelo consumo informado, quanto pela situação mecânica de cada veículo')

let dist = document.getElementById("kmPercorrido"); //CAPTURA O KM PERCORRIDO

let valorKm = document.getElementById("valorComb"); //CAPTURA O INPUT DO VALOR DO COMBUSTÍVEL

let consumoCarro = document.getElementById("consCarro"); //CAPTURA O CONSUMO DO COMBUSTÍVEL

let result = document.getElementById("botaoresultado"); //CAPTURA O BOTÃO CALCÚLAR

let selecCarro = document.getElementById("selecionarCarro"); //CAPTURA O SELECT

let idaEvolta = document.getElementById('idaVoltaButton') //CAPTURA O CHECKED DO BOTÃO IDA E VOLTA

//--------------------------------------------------

idaEvolta.addEventListener("change", function () {//CAPTURA BOTÃO IDA E VOLTA
});

//--------------------------------------------------

result.addEventListener("click", function (event) { // FUNÇÃO DO EVENTO CLICK NO BOTÃO CALCULAR
    event.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página

    let valorFinal = (dist.value / consumoCarro.value) * (valorKm.value)
    if (idaEvolta.checked && consumoCarro.value && valorKm.value && dist.value) {
        // SE OS 4 CAMPOS ESTIVEREM PREENCHIDOS
        return console.log("O valor do combustível para essa viagem é de R$", (valorFinal * 2).toFixed(2))

    } else if (consumoCarro.value && valorKm.value && dist.value) {
        // SE OS 3 CAMPOS ESTIVEREM PREENCHIDOS
        return console.log("O valor do combustível para essa viagem é de R$", (valorFinal).toFixed(2))
    }
     else {
        // Se nenhum carro foi selecionado e o campo de consumo do carro está vazio
        window.alert("Por favor, selecione um carro no menu e preencha Km e preço do combustível, ou preencha os três campos para o cálculo ser feito.");
    }
});



//--------------------------------------------------



selecCarro.addEventListener("change", function () { //função pega o valor escolhido no select

    if (dist.value.length === 0) {// VERIFICA SE O CAMPO DISTÂNCIA ESTÁ PREENCHIDO
        return window.alert("Preencha a quantidade de Km's e o preço do combustível para o cálculo")

    } else if (valorKm.value.length === 0) {// VERIFICA SE O CAMPO ESTÁ  PREENCHIDO
        return window.alert("Preencha a quantidade de Km's e o preço do combustível para o cálculo")
        //SE FALTAR CAMPO PREENCHIDO RETORNA AS MENSAGENS, CASO NÃO FALTA SEGUE PARA O ELSE E TERMINA DE EXECUTAR O CÁLCULO

    } else {

        let indiceSelecionado = selecCarro.selectedIndex; // Obtendo o índice da opção selecionada

        let carroSelecionado = opcoesDeCarros[indiceSelecionado]; // Obtendo o objeto do array com base no índice
        // Agora você pode acessar as propriedades do carro selecionado, por exemplo:
        if (selecCarro.selectedIndex == [0]) {
            return console.log('Escola um veículo')

        }


        if (idaEvolta.checked) {
            console.log("Carro selecionado:", carroSelecionado.nome);
            return console.log(`O valor do combustível para ${carroSelecionado.nome} nessa viagem é de: R$`, (((dist.value / carroSelecionado.consumo) * (valorKm.value)).toFixed(2)) * 2)
        }

        console.log("Carro selecionado:", carroSelecionado.nome);
        console.log(`O valor do combustível para ${carroSelecionado.nome} nessa viagem é de: R$`, ((dist.value / carroSelecionado.consumo) * (valorKm.value)).toFixed(2));
    }
})


//OPÇÃO DE INSERIR VALOR DO PEDÁGIO
//OPÇÃO DE DIVIDR POR QUANTAS PESSOAS VÃO VIAJAR