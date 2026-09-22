const barraRangeIdade = document.getElementById('customRange1')
const valorIdade = document.getElementById('rangeValue')
const barraRangepeso = document.getElementById('customRange2')
const valorpeso = document.getElementById('rangeValue2')
const barrarangeconsumido = document.getElementById('customRange4')
const valorconsumido = document.getElementById('rangeValue4')
const barraRangehoras = document.getElementById('customRange5')
const valorhoras = document.getElementById('rangeValue5')

const botao1 = document.getElementById("primeiroBotao")
const botao2 = document.getElementById("segundoBotao")


const textoIntervalo = document.getElementById("campoReadonly2")

const textomedia = document.getElementById("campoReadonly1")


const mensagemAlerta = document.getElementById("mensagemAlerta")
const mensagemAlerta2 = document.getElementById("mensagemAlerta2")


function converterDecimalParaHoras(valorDecimal) {
    // Pega a parte inteira para as horas
    const horas = Math.floor(valorDecimal);

    // Pega o restante decimal, multiplica por 60 e arredonda para os minutos
    const minutos = Math.round((valorDecimal - horas) * 60);

    // Trata o caso de arredondamento ir para 60 minutos
    if (minutos === 60) {
        return `${horas + 1}h 0min`;
    }

    return `${horas}h ${minutos}min`;
}

barraRangeIdade.addEventListener('input', (event) => {
    valorIdade.textContent = event.target.value;
})
barraRangepeso.addEventListener('input', (event) => {
    valorpeso.textContent = event.target.value;
})

barrarangeconsumido.addEventListener('input', (event) => {
    valorconsumido.textContent = event.target.value;
})
barraRangehoras.addEventListener('input', (event) => {
    valorhoras.textContent = event.target.value;
})

botao1.addEventListener('click', () => {
    var resultadofinal2 = ((valorpeso.textContent * 35) / 1000);

    mensagemAlerta2.style.display = "block"

    textomedia.value = resultadofinal2
})

botao2.addEventListener('click', () => {
    var quantidadePorcoes = valorconsumido.textContent / 250

    var intervaloPorcoes = valorhoras.textContent / quantidadePorcoes

    var resultadoFinal = converterDecimalParaHoras(intervaloPorcoes)

    mensagemAlerta.style.display = "block"

    textoIntervalo.value = resultadoFinal


})


