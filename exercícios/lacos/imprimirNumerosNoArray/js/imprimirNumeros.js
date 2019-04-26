function imprimirNumeros(){
    let qtde = document.getElementById("quantidade").value
    let arrayNumeros = []

    if(qtde == ""){
        alert("Digite o valor da quantidade!")
    } else {
        let numeroInteiro = parseInt(qtde)
        
        for(let i = 1; i <= numeroInteiro; i++){
            arrayNumeros[i-1] = i
            // arrayNumeros.push(i)
            // alert(arrayNumeros)
        }

        imprimirArray(arrayNumeros)
    }
}

function imprimirArray(array){
    let numeros = ""
    let span = document.getElementById("resultado")

    for(let i = 0; i < array.length; i++){
        numeros += array[i] + " "
    }

    span.innerText = numeros

}
