class Validador{

    validar(){

        let nome = document.getElementById("inputNome").value

        if(nome == ""){
            alert("O campo nome é obrigatório!")
        }
    }
}

let validador = new Validador()