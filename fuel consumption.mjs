


window.alert("Resultado no Console")


import { opcoesDeCarros } from "./arrays.mjs";

//window.alert('Os valores podem não ser exatos, tanto pelo consumo informado, quanto pela situação mecânica de cada veículo')

let dist = document.querySelectorAll("#kmPercorrido")[0]; //CAPTURA O KM PERCORRIDO

let valorKm = document.querySelectorAll("#valorComb")[0]; //CAPTURA O INPUT DO VALOR DO COMBUSTÍVEL

let consumoCarro = document.querySelector("#consCarro"); //CAPTURA O CONSUMO DO COMBUSTÍVEL

let result = document.querySelectorAll("#botaoresultado")[0]; //CAPTURA O BOTÃO CALCÚLAR

let selecCarro = document.getElementById("selecionarCarro"); //CAPTURA O SELECT

let idaEvolta = document.getElementById('idaVolta') //CAPTURA O CHECKED DO BOTÃO IDA E VOLTA

//--------------------------------------------------

idaEvolta.addEventListener("change", function(){//CAPTURA BOTÃO IDA E VOLTA
});

//--------------------------------------------------

result.addEventListener("click" , function() { // FUNÇÃO DO EVENTO CLICK NO BOTÃO CALCULAR
    
    let valorFinal = (dist.value / consumoCarro.value) * (valorKm.value)
    if (consumoCarro.value && valorKm.value && dist.value && idaEvolta.checked) {
        // SE OS 4 CAMPOS ESTIVEREM PREENCHIDOS
        return console.log("O valor do combustível para essa viagem é de R$",(valorFinal * 2).toFixed(2))

    }else if (consumoCarro.value && valorKm.value && dist.value) {
        // SE OS 3 CAMPOS ESTIVEREM PREENCHIDOS
        return console.log("O valor do combustível para essa viagem é de R$",(valorFinal).toFixed(2))
    }
    else if(selecCarro.selectedIndex !== 0){
        // Se o campo de consumo do carro não estiver preenchido, mas um carro foi selecionado no select
        let indiceSelecionado = selecCarro.selectedIndex;
        let carroSelecionado = opcoesDeCarros[indiceSelecionado];
        
        console.log("Carro selecionado:", carroSelecionado.nome);
        console.log("O valor do combustível para essa viagem é de: R$",((dist.value / carroSelecionado.consumo) * valorKm.value).toFixed(2));
        
    }else{
        // Se nenhum carro foi selecionado e o campo de consumo do carro está vazio
        window.alert("Por favor, selecione um carro no menu e preencha Km e preço do combustível, ou preencha os três campos para o cálculo ser feito.");
    }
});



//--------------------------------------------------



selecCarro.addEventListener("change",function(){ //função pega o valor escolhido no select
    
    if(dist.value.length === 0){// VERIFICA SE O CAMPO ESTÁ PREENCHIDO
        return window.alert("Preencha a quantidade de Km's e o preço do combustível para o cálculo")
        
    }else if(valorKm.value.length === 0){// VERIFICA SE O CAMPO ESTÁ  PREENCHIDO
        return window.alert("Preencha a quantidade de Km's e o preço do combustível para o cálculo")
        //SE FALTAR CAMPO PREENCHIDO RETORNA AS MENSAGENS, CASO NÃO FALTA SEGUE PARA O ELSE E TERMINA DE EXECUTAR O CÁLCULO
        
    }else{
        
        let indiceSelecionado = selecCarro.selectedIndex; // Obtendo o índice da opção selecionada
        
        let carroSelecionado = opcoesDeCarros[indiceSelecionado]; // Obtendo o objeto do array com base no índice
        // Agora você pode acessar as propriedades do carro selecionado, por exemplo:
        
        if(idaEvolta.checked){
            console.log("Carro selecionado:", carroSelecionado.nome);
            return console.log("O valor do combustível para essa viagem é de: R$", (((dist.value / carroSelecionado.consumo) * (valorKm.value)).toFixed(2)) * 2)
        }
        
        console.log("Carro selecionado:", carroSelecionado.nome);
        console.log("O valor do combustível para essa viagem é de: R$", ((dist.value / carroSelecionado.consumo) * (valorKm.value)).toFixed(2));  
    }
})


