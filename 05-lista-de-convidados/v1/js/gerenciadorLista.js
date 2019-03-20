class GerenciadorLista{

    adicionarConvidado(){
        // let convidado = document.getElementById("inputConvidado").value

        // document.getElementById("lista").innerText += convidado + '\n'
        
    }    

    validar(){
        if(document.getElementById("inputConvidado").value == ""){
            alert("Insira o nome do convidado!")
        } else {

        }
    }
}

let gerenciador = new GerenciadorLista()