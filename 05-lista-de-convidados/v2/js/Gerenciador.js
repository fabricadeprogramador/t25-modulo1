class Gerenciador {
    adicionar() {
        let nomeConvidado = document.getElementById('inputConvidado').value
        let div = nomeConvidado
        this.validar()
    }
    validar() {
        let nomeConvidado = document.getElementById('inputConvidado').value
        if (nomeConvidado == "") {
            alert("Digite o nome do convidado!")
        }
    }
    limpar() {
        document.getElementById('inputConvidado').value = ''
    }
}
let gerenciador = new Gerenciador()