class Validador {

    validar() {

        let mensagem = ""
        let nome = document.getElementById("inputNome").value
        let email = document.getElementById("email").value
        let sexo = document.querySelector("[type=radio]:checked")
        let qtdCursos = document.querySelectorAll("[type=checkbox]:checked").length
        let estado = document.getElementById("estado").value
        let foto = document.getElementById("foto").files[0]
        let dataNascimento = document.getElementById("datanasc").value
        // let fem = document.getElementById("fem").checked
        // let masc = document.getElementById("masc").checked


        if (nome == "") {
           mensagem += "O campo nome é obrigatório!\n"
        }

        if(email == ""){
            mensagem += "O campo e-mail é obrigatório!\n"
        }

        // if(fem == false && masc == false){
        //     mensagem += "Selecione o sexo!\n"
        // }

        if(sexo == null){
            mensagem += "Selecione o sexo!\n"
        }

        // if(qtdCursos == null){
        //     mensagem += "Selecione um curso!\n"
        // }

        if(qtdCursos == 0){
            mensagem += "Selecione um curso!\n"
        }

        if(estado == ""){
            mensagem += "Selecione o estado!\n"
        }

        if(foto == undefined){
            mensagem += "Selecione uma foto!\n"
        } else if(foto.size >= 1000000){
            mensagem += "A foto deve ter no máximo 1 MB!\n"
        }

        if(dataNascimento == ""){
            mensagem += "Data de nascimento obrigatória!"
        }

        //IMPRESSÃO DA MENSAGEM NO ALERTA
        if(mensagem != ""){
            // alert(mensagem)
            document.getElementById("textoMensagem").innerText = mensagem
            document.querySelector('#mensagens').classList.add('show')
        }

    }
}

let validador = new Validador()