class Gerenciador {

    constructor() {
        //Atributos do objeto gerenciador da classe Gerenciador
        this.contador = 0
        this.elementoEditar = null
        this.listaConvidados = []
    }

    lerDados() {
        let convidado = {}
        convidado.nome = document.getElementById('inputConvidado').value

        return convidado
    }

    buscarDadosLocalStorage() {
        if (localStorage.getItem("convidados") == null) {
            localStorage.setItem("convidados", "[]")
        } else {
            this.listaConvidados = JSON.parse(localStorage.getItem("convidados"))
            this.gerarLista()
        }

        if (localStorage.getItem("contador") == null) {
            localStorage.setItem("contador", "0")
        } else {
            this.contador = parseInt(localStorage.getItem("contador"))
        }
    }

    gerarLista() {
        let lista = document.getElementById("lista")

        lista.innerText = ""

        for (let i = 0; i < this.listaConvidados.length; i++) {

            let divLinha = document.createElement("div")

            let spanNome = document.createElement("span")
            spanNome.innerText = this.listaConvidados[i].nome

            let imgEdicao = document.createElement("img")
            imgEdicao.setAttribute("src", "img/editar.svg")
            imgEdicao.setAttribute("onclick", "gerenciador.editar('" + this.listaConvidados[i].id + "')")
            // imgEdicao.setAttribute("onclick", `gerenciador.editar('${this.listaConvidados[i].id}')`)
            imgEdicao.classList.add("imagem")

            let imgRemocao = document.createElement("img")
            imgRemocao.setAttribute("src", "img/lixeira.svg")
            imgRemocao.setAttribute("onclick", "gerenciador.remover('" + this.listaConvidados[i].id + "')")
            // imgEdicao.setAttribute("onclick", `gerenciador.editar('${this.listaConvidados[i].id}')`)
            imgRemocao.classList.add("imagem")

            divLinha.appendChild(spanNome)
            divLinha.appendChild(imgEdicao)
            divLinha.appendChild(imgRemocao)

            lista.appendChild(divLinha)
        }
    }

    //Méltodo responsável por adicionar uma nova div na lista contendo o convidado e suas ações
    salvar() {

        let convidadoRetornado = this.lerDados()

        if (this.validar(convidadoRetornado)) {

            if (this.elementoEditar == null) {
                convidadoRetornado.id = this.contador
                this.listaConvidados.push(convidadoRetornado)
                this.contador++

                localStorage.setItem("contador", this.contador)
                localStorage.setItem("convidados", JSON.stringify(this.listaConvidados))
            } else {
                this.elementoEditar.nome = convidadoRetornado.nome
                localStorage.setItem("convidados", JSON.stringify(this.listaConvidados))
                this.elementoEditar = null
            }

            this.limpar()
            this.gerarLista()
        }
    }

    remover(id) {
        let pos = -1
        for (let i = 0; i < this.listaConvidados.length; i++) {
            if (this.listaConvidados[i].id == id) {
                pos = i
            }
        }

        if (pos != -1) {
            this.listaConvidados.splice(pos, 1)
            localStorage.setItem("convidados", JSON.stringify(this.listaConvidados))
            this.gerarLista()
        }
    }

    editar(id) {
        let pos = -1
        for (let i = 0; i < this.listaConvidados.length; i++) {
            if (this.listaConvidados[i].id == id) {
                document.getElementById("inputConvidado").value = this.listaConvidados[i].nome
                this.elementoEditar = this.listaConvidados[i]
            }
        }
    }

    validar(convidado) {

        //Verifica se foi digitado o nome no input
        if (convidado.nome == "") {
            alert("Digite o nome do convidado!")
            return false
        }
        return true
    }

    limpar() {
        //Seta o texto de dentro do input "inputConvidado" para vazio
        document.getElementById('inputConvidado').value = ''
    }
}

//Instanciando o objeto da classe Gerenciador
let gerenciador = new Gerenciador()