function abrirMenu(){
    //Adiciona uma classe css chamada de nome-da-classe-css no elemento nome-elemento
    document.getElementById("menu").classList.add("menu-aberto")
    document.getElementById("menu").classList.remove("menu-fechado")

    //Remove uma classe css chamada de nome-da-classe-css no elemento nome-elemento
    // document.getElementById("nome-elemento").classList.remove("nome-da-classe-css")
}

function fecharMenu(){
    document.getElementById("menu").classList.add("menu-fechado")
    document.getElementById("menu").classList.remove("menu-aberto")
}

function fecharMensagem(){
    document.querySelector(".mensagens").classList.remove("show")
}