var listaNomes = []

function buscarNome(){

    let indice = 0
    
    while(listaNomes[indice] != "Jão" && indice < listaNomes.length){
        indice++
    }

    if(indice >= listaNomes.length){
        indice = -1
    }

    let spanArray = document.getElementById("array")
    spanArray.innerText = listaNomes

    let spanResultado = document.getElementById("resultado")
    spanResultado.innerText = "Indice do Jão: " + indice
}

function adicionarNome(){
    let nomeDigitado = document.getElementById("inputNome").value

    if(nomeDigitado == ""){
        alert("Campo nome deve ser preenchido!")
    } else {
        listaNomes.push(nomeDigitado)
        alert("Nome adicionado à lista com sucesso!")
    }
}