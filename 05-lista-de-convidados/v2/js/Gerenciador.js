var contador = 0
class Gerenciador {
    adicionar() {

        let Ehvalido = this.validar()

        if (Ehvalido) {


            let nomeConvidado = document.getElementById('inputConvidado').value
            let div = document.createElement("div")
            div.innerText = nomeConvidado
            div.classList.add("div")
            div.setAttribute("id", "div-" + contador)

            let img = document.createElement("img")
            img.setAttribute('onclick', "gerenciador.remover('div-" + contador + "')")
            img.setAttribute('src', "img/lixeira.svg")
            img.classList.add("imagem")
            img.classList.add("imagem:hover")
            div.appendChild(img)

            let editar = document.createElement("img")

            document.getElementById("lista").appendChild(div)
            contador++
            this.limpar()
        }
    }
    remover(id) {
        document.getElementById(id).remove()
    }
    validar() {
        let nomeConvidado = document.getElementById('inputConvidado').value
        if (nomeConvidado == "") {
            alert("Digite o nome do convidado!")
            return false
        }
        return true
    }
    limpar() {
        document.getElementById('inputConvidado').value = ''
    }
}
let gerenciador = new Gerenciador()