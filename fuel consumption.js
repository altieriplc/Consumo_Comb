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

let selecCarro = document.getElementById("selecionarCarro") //pegando o select

result.addEventListener("click" , function() {
 
    if (consumoCarro.value) {
        // Se o campo de consumo do carro estiver preenchido
    let valorFinal = (dist.value / consumoCarro.value) * (valorKm.value)
    console.log("O valor do combustível para essa viagem é de R$",valorFinal.toFixed(2)) 

    }else if (selecCarro.selectedIndex !== 0){
        // Se o campo de consumo do carro não estiver preenchido, mas um carro foi selecionado no select
        let indiceSelecionado = selecCarro.selectedIndex;
        let carroSelecionado = opcoesDeCarros[indiceSelecionado];

        console.log("Carro selecionado:", carroSelecionado.nome);
        console.log("Consumo:",((dist.value / carroSelecionado.consumo) * valorKm.value).toFixed(2));

    } else{
         // Se nenhum carro foi selecionado e o campo de consumo do carro está vazio
         window.alert("Por favor, selecione um carro no menu ou preencha o consumo do carro.");
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
   
    let indiceSelecionado = selecCarro.selectedIndex; // Obtendo o índice da opção selecionada

    let carroSelecionado = opcoesDeCarros[indiceSelecionado]; // Obtendo o objeto do array com base no índice

      // Agora você pode acessar as propriedades do carro selecionado, por exemplo:

      console.log("Carro selecionado:", carroSelecionado.nome);
      console.log("Consumo:", ((dist.value / carroSelecionado.consumo) * (valorKm.value)).toFixed(2));

  });
   
