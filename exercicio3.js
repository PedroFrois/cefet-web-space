let botoesExpandir = document.querySelectorAll(".botao-expandir-retrair")

for (let botao of botoesExpandir) {
    botao.addEventListener("click", function (evt) {
        evt.currentTarget.parentNode.classList.toggle("expandido");
    });
}