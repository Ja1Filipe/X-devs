const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {


    esconderCartaoSelecionado();

    const cartoes = document.querySelectorAll(".cartao")
    cartaoAtual++;
    const forUltimoCartao = cartaoAtual > 5;
    if (forUltimoCartao) (
        cartaoAtual = 0
    )
    cartoes[cartaoAtual].classList.add("selecionado")

    console.log(cartaoAtual);
})

btnVoltar.addEventListener("click", function () {
    const forPrimeiroCartao = cartaoAtual === 0;
    if (forPrimeiroCartao) cartaoAtual = 6;
    
    esconderCartaoSelecionado();

    const cartoes = document.querySelectorAll(".cartao")
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado")
    console.log(cartaoAtual);
})

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

