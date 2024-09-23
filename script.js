const form = document.getElementById('form-campanha')
const valorTotalInput = document.getElementById('valorTotal')

const valorInfluenciadorInput = document.getElementById('valorInfluenciador')
const valorAgenciaInput = document.getElementById('valorAgencia')
const valorImpostoInput = document.getElementById('valorImposto')
const valorMarianaInput = document.getElementById('valorMariana')
const valorSophieInput = document.getElementById('valorSophie')
const valorTataInput = document.getElementById('valorTata')
// const tipoContratoInput = document.querySelector('input[name="tipoContrato"]:checked')


function atualizarValores() {

    const { valorInfluenciador, valorAgencia, valorImposto, valorMariana, valorSophie, valorTata } = calculaImposto()

    if (valorTotalInput.value === "") {
        return
    }

    valorInfluenciadorInput.value = valorInfluenciador.toFixed(2)
    valorAgenciaInput.value = valorAgencia.toFixed(2)
    valorImpostoInput.value = valorImposto.toFixed(2)
    valorMarianaInput.value = valorMariana.toFixed(2)
    valorSophieInput.value = valorSophie.toFixed(2)
    valorTataInput.value = valorTata.toFixed(2)
}

function calculaImposto() {
    const totalBruto = parseFloat(valorTotalInput.value)
    const valorImposto = totalBruto * 0.06
    const totalLiquido = totalBruto * 0.94

    const tipoContrato = document.querySelector('input[name="tipoContrato"]:checked').value;
    let valorInfluenciador = 0
    let valorAgencia = 0

    if (tipoContrato === "exclusividade") {
        valorInfluenciador = totalLiquido * 0.78
        valorAgencia = totalLiquido * 0.22
    } else if (tipoContrato === "padrao") {
        valorInfluenciador = totalLiquido * 0.73
        valorAgencia = totalLiquido * 0.27
    }

    console.log("Bruto: " + totalBruto + "\tImposto: " + valorImposto + "\tLiquido: " + totalLiquido)
    console.log("Contrato: " + tipoContrato + "\tInfluenciador: " + valorInfluenciador + "\tAgencia: " + valorAgencia)
    const valorMariana = valorAgencia * 0.4
    const valorSophie = valorAgencia * 0.4
    const valorTata = valorAgencia * 0.2

    return {
        valorInfluenciador,
        valorAgencia,
        valorImposto,
        valorMariana,
        valorSophie,
        valorTata
    }
}


valorTotalInput.addEventListener('input', atualizarValores)


document.querySelectorAll('input[name="tipoContrato"]').forEach(radio => {
    radio.addEventListener('change', atualizarValores)
});

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // implementar gatilho/lógica para enviar os dados para o banco de dados e talvez email (smtp, talvez de pra consumir a api)
})