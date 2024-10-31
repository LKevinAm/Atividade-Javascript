document.getElementById("btnCalcular").addEventListener('click', function() {
    let quilometros = document.getElementById("quilometros").value
    let litros = document.getElementById("litros").value
    
    quilometros = parseFloat(quilometros)
    litros = parseFloat(litros)
    
    let consumo = (quilometros / litros)
  

    document.getElementById("consumo").innerText = `O consumo do seu automovel é de ${consumo.toFixed(1)} por litro.`
})