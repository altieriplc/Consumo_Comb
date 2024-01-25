// let testeFigma = document.querySelector('#figma')

// testeFigma.addEventListener("click", function(){
//     console.log("TE AMO")
// });

//criar objetos para modelos dos carros dentro
//criar acesso para valor de consumo dentro desse objeto



// window.alert("Resultado no Console")

let dist = document.querySelectorAll("#kmPercorrido")[0]; //PEGA O KM PERCORRIDO

let valorKm = document.querySelectorAll("#valorComb")[0]; //PEGA O INPUT DO VALOR DO COMBUSTÍVEL

let consumoCarro = document.querySelector("#consCarro"); //PEGA O CONSUMO DO COMBUSTÍVEL

let result = document.querySelectorAll("#botaoresultado")[0]; //PEGA O BOTÃO CALCÚLAR

let selecCarro = document.getElementById("selecionarCarro") //PEGA O SELECT

result.addEventListener("click" , function() { // FUNÇÃO DO EVENTO CLICK NO BOTÃO CALCULAR
 
    if (consumoCarro.value && valorKm.value && dist.value) {
        // SE OS 3 CAMPOS ESTIVEREM PREENCHIDOS
    let valorFinal = (dist.value / consumoCarro.value) * (valorKm.value)
    console.log("O valor do combustível para essa viagem é de R$",valorFinal.toFixed(2)) 

        }else if (selecCarro.selectedIndex !== 0){
                // Se o campo de consumo do carro não estiver preenchido, mas um carro foi selecionado no select
                let indiceSelecionado = selecCarro.selectedIndex;
                let carroSelecionado = opcoesDeCarros[indiceSelecionado];
                
                console.log("Carro selecionado:", carroSelecionado.nome);
                console.log("O valor do combustível para essa viagem é de: R$",((dist.value / carroSelecionado.consumo) * valorKm.value).toFixed(2));

                } else{
                // Se nenhum carro foi selecionado e o campo de consumo do carro está vazio
                window.alert("Por favor, selecione um carro no menu e preencha Km e preço do combustível, ou preencha os três campos para o cálculo ser feito.");
    }
});


let opcoesDeCarros = [
    {
        none:0
    },
    {
        nome: "Clio",
        marca: "Renault",
        consumo: 14.3,

    },

    {
        nome:"Kwid",
        marca: "Renault",
        consumo: 15.7,
    },
    {
        nome:"T6",
        marca: "Jac",
        consumo: 10,
    }
    

]
//let carroSelecionado = selecCarro.consumo.value;



selecCarro.addEventListener("change",function(){ //função pega o valor escolhido no select
    
    if(dist.value.length === 0){// VERIFICA SE O CAMPO ESTÁ PREENCHIDO
        return window.alert("Preencha a quantidade de Km's e o preço do combustível para o cálculo")

    }else if(valorKm.value.length === 0){// VERIFICA SE O CAMPO ESTÁ PREENCHIDO
        return window.alert("Preencha a quantidade de Km's e o preço do combustível para o cálculo")
        //SE FALTAR CAMPO PREENCHIDO RETORNA AS MENSAGENS, CASO NÃO FALTA SEGUE PARA O ELSE E TERMINA DE EXECUTAR O CÁLCULO

    }else{}
    
       
       let indiceSelecionado = selecCarro.selectedIndex; // Obtendo o índice da opção selecionada
       
       let carroSelecionado = opcoesDeCarros[indiceSelecionado]; // Obtendo o objeto do array com base no índice
       // Agora você pode acessar as propriedades do carro selecionado, por exemplo:
       
       console.log("Carro selecionado:", carroSelecionado.nome);
       console.log("O valor do combustível para essa viagem é de: R$", ((dist.value / carroSelecionado.consumo) * (valorKm.value)).toFixed(2));
    
    
});
   
//PRÓXIMO PASSO, BOTÃO DE IDA E VOLTA DE VIAGEM