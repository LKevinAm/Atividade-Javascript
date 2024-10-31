document.getElementById("btnCalcular").addEventListener('click',function CalcularOperacoes() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    
    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)
    
    let soma = (numero1 + numero2)
    let subtracao = (numero1 - numero2)
    let multiplicacao = (numero1 * numero2)
    let divisao = (numero1 / numero2)

    document.getElementById("resultado soma").innerText = `A soma entre os dois numero é ${soma}`
    document.getElementById("resultado subtracao").innerText = `A subtração entre os dois numero é ${subtracao}`
    document.getElementById("resultado multiplicacao").innerText = `A multiplicação entre os dois numero é ${multiplicacao}`
    document.getElementById("resultado divisao").innerText = `A divisão entre os dois numero é ${divisao}`
})