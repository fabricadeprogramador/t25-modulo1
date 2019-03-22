class GerenciadorLista {

    adicionarConvidado() {

        let ehValido = this.validar()

        if (ehValido) {
            //Adiciono
            let convidado = document.getElementById('inputConvidado').value
            document.getElementById('lista').innerText += convidado + '\n'
            this.limpar()
        } 

    }

    validar() {
        let nomeConvidado = document.getElementById("inputConvidado").value
        if (nomeConvidado == "") {
            //Inválido
            alert("Preencha o nome do convidado!")
            return false
        } else if (nomeConvidado.length > 30) {
            alert("Nome deve conter no máximo 30 caracteres!")
            return false
        } else if (nomeConvidado.charAt(0) != nomeConvidado.charAt(0).toUpperCase()) {
            alert("A primeira letra do nome deve ser maiúscula!")
            return false
        } else {
            //Válido
            return true
        }

    }

    limpar() {
        document.getElementById('inputConvidado').value = ""
    }
}

let gerenciador = new GerenciadorLista()