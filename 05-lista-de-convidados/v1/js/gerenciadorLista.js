class GerenciadorLista {

    adicionarConvidado() {
     
        let ehValido = this.validar()

        if(ehValido){
            //Adiciono
            let convidado = document.getElementById('inputConvidado').value
            document.getElementById('lista').innerText += convidado + '\n'
        } else {
            alert("Preencha o nome do convidado!")
        }

    }

    validar() {
        if (document.getElementById("inputConvidado").value == "") {
            //Inválido
            return false
        }

        //Válido
        return true
    }
}

let gerenciador = new GerenciadorLista()