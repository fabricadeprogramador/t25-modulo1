class Gerenciador {

    constructor() {
        this.contador = 0
        this.elementoEditar = null
    }

    lerDados() {
        let convidado = {}

        convidado.nome = document.getElementById('inputConvidado').value
        convidado.idade = document.getElementById('inputIdade').value
        convidado.sexo = document.querySelector('[type=radio]:checked').value

        return convidado
    }

    inserirLinha(convidado) {
        let tabela = document.getElementById("tabela")

        let linha = tabela.insertRow()
        linha.setAttribute('id', convidado.id)

        let colunaId = linha.insertCell(0)
        let colunaNome = linha.insertCell(1)
        let colunaIdade = linha.insertCell(2)
        let colunaSexo = linha.insertCell(3)
        let colunaExcluir = linha.insertCell(4)
        let colunaEditar = linha.insertCell(5)

        colunaId.innerText = convidado.id
        colunaNome.innerText = convidado.nome
        colunaIdade.innerText = convidado.idade
        colunaSexo.innerText = convidado.sexo

        let imgExcluir = document.createElement('img')
        imgExcluir.setAttribute('src', 'img/lixeira.svg')
        imgExcluir.setAttribute('onclick', "gerenciador.remover('" + convidado.id + "')")
        imgExcluir.classList.add('imagem')

        let imagemEditar = document.createElement('img')
        imagemEditar.setAttribute('src', 'img/editar.svg')
        imagemEditar.setAttribute('onclick', "gerenciador.editar('" + convidado.id + "')")
        imagemEditar.classList.add('imagem')

        colunaExcluir.appendChild(imgExcluir)
        colunaEditar.appendChild(imagemEditar)
    }

    salvarEdicao(convidado){

        this.elementoEditar.children[1].innerText = convidado.nome
        this.elementoEditar.children[2].innerText = convidado.idade
        this.elementoEditar.children[3].innerText = convidado.sexo
    }

    //Méltodo responsável por adicionar uma nova div na lista contendo o convidado e suas ações
    salvar() {

        let convidado = this.lerDados()

        let valido = this.validar(convidado)

        if (valido) {

            if (this.elementoEditar == null) {
                convidado.id = "convidado-" + this.contador

                this.inserirLinha(convidado)
                this.contador++
            } else {
                this.salvarEdicao(convidado)
                this.elementoEditar = null
            }

            this.limpar()
        }
    }

    remover(id) {
        document.getElementById(id).remove()
    }

    editar(id) {
        this.elementoEditar = document.getElementById(id)

        document.getElementById("inputConvidado").value = this.elementoEditar.children[1].textContent
        document.getElementById('inputIdade').value = this.elementoEditar.children[2].textContent

        if (this.elementoEditar.children[3].textContent == "M") {
            document.getElementById("masc").checked = true
        } else {
            document.getElementById("fem").checked = true
        }
    }

    validar(convidado) {

        if (convidado.nome == "") {
            alert("Digite o nome do convidado!")
            return false
        }

        if (convidado.idade == "") {
            alert("Digite a idade do convidado!")
            return false
        }

        if (convidado.sexo == null) {
            alert("Selecione o sexo do convidado")
            return false
        }

        return true
    }

    limpar() {
        //Seta o texto de dentro do input "inputConvidado" para vazio
        document.getElementById('inputConvidado').value = ''
        document.getElementById('inputIdade').value = ''

        document.getElementById("fem").checked = false
        document.getElementById("masc").checked = false
    }
}

//Instanciando o objeto da classe Gerenciador
let gerenciador = new Gerenciador()