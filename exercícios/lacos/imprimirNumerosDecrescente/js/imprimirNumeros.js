function imprimirNumerosDecrescente(){
    let qtde = document.getElementById("quantidade").value
    let span = document.getElementById("resultado")
    let numeros = ""

    if(qtde == ""){
        alert("Digite o valor da quantidade!")
    } else {
        let numeroInteiro = parseInt(qtde)
        
        for(let i = numeroInteiro; i >= 1; i--){
            numeros += i + " "
        }

        span.innerText = numeros
    }
}