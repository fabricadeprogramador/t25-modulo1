function imprimirPares(){
    let qtde = document.getElementById("quantidade").value
    let span = document.getElementById("resultado")
    let numeros = ""

    if(qtde == ""){
        alert("Digite o valor da quantidade!")
    } else {
        let numeroInteiro = parseInt(qtde)
        
        for(let i = 1; i <= numeroInteiro; i++){
            if(i % 2 == 0){
                numeros += i + " "
            }
        }

        span.innerText = numeros
    }
}

function imprimirImpares(){
    let qtde = document.getElementById("quantidade").value
    let span = document.getElementById("resultado")
    let numeros = ""

    if(qtde == ""){
        alert("Digite o valor da quantidade!")
    } else {
        let numeroInteiro = parseInt(qtde)
        
        for(let i = 1; i <= numeroInteiro; i++){
            if(i % 2 != 0){
                numeros += i + " "
            }
        }

        span.innerText = numeros
    }
}