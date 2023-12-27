let valorKm = document.querySelectorAll("#valorComb")[0];

let dist = document.querySelectorAll("#kmPercorrido")[0];

let result = document.querySelectorAll("#resultado")[0];

let consumoCarro = document.querySelector("#consCarro");

result.addEventListener("click" , function() {
    let valorFinal = (dist.value / consumoCarro.value) * (valorKm.value)
    console.log("O valor do consumo é", valorFinal.toFixed(2))
    
});


//criar objetos para modelos dos carros dentro
//criar acesso para valor de consumo dentro desse objeto
