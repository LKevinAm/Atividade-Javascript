document.getElementById("btnCalcular").addEventListener('click', function CalcularSoma() {
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    
    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)
    
    let soma = (numero1 + numero2)

    document.getElementById("resultado").innerText = `A soma entre os dois numero é ${soma}`
})