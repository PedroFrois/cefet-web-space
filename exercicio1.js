function calculaForcaGravitacional() {
    let constante = document.querySelector("#constante").value;
    let massa1 = document.querySelector("#massa1").value;
    let massa2 = document.querySelector("#massa2").value;
    let distancia = document.querySelector("#distancia").value;

    return constante * massa1 * massa2 / (distancia ** 2)
}

document.querySelector("#calcular").addEventListener("click", function () {
    let resultado = document.querySelector("#resultado")
    resultado.value = calculaForcaGravitacional()
});