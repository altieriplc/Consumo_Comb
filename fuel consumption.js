let valorKm = document.querySelectorAll("#valorComb")[0];

let dist = document.querySelectorAll("#kmPercorrido")[0];

let result = document.querySelectorAll("#resultado")[0];

result.addEventListener("click" , function() {
    let valorFinal = (valorKm.value) * (dist.value)
    console.log("O valor do consumo é", valorFinal)
    
});


//inserir cálculo baseado no consumo do carro