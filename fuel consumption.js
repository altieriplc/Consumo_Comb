// let testeFigma = document.querySelector('#figma')

// testeFigma.addEventListener("click", function(){
//     console.log("TE AMO")
// });

//criar objetos para modelos dos carros dentro
//criar acesso para valor de consumo dentro desse objeto



// window.alert("Resultado no Console")

let valorKm = document.querySelectorAll("#valorComb")[0];

let dist = document.querySelectorAll("#kmPercorrido")[0];

let result = document.querySelectorAll("#botaoresultado")[0];

let consumoCarro = document.querySelector("#consCarro");

result.addEventListener("click" , function() {
    let valorFinal = (dist.value / consumoCarro.value) * (valorKm.value)
    console.log("O valor do combustível para essa viagem é de R$",valorFinal.toFixed(2)) 
});

let opcoesDeCarros = [
    {
        nome: "Clio",
        marca: "Renault",
        consumo: 14.3,

    },

    {
        nome:"Kwid",
        marca: "Renault",
        consumo: 15.7,
    }
    

]

let selecCarro = document.getElementById("selecionarCarro") //pegando o select

selecCarro.addEventListener("change",function(){ //função pega o valor escolhido no select

    let carroSelecionado = selecCarro.consumo.value;

    for(let i = 0; i < opcoesDeCarros.length; i++){ //percorre o array

        if(i == carroSelecionado){ //se o i for igual ao que escolhi no select
            
            
        }
    
    
   
    
    // if (carroSelecionado) {
    //     let resultado = (dist.value / carroSelecionado.consumo) * valorKm.value;
    //     console.log("O valor do combustível para essa viagem é de R$", resultado.toFixed(2));
    // } else {
    //     console.log("Carro não encontrado");
    // }
}})
