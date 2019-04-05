//Variável "global" para manter o valor do contador
var contador = 0
//Variável "global" para manter o elemento de edição ou null caso não seja uma edição
var elementoEditar = null

class Gerenciador {

    //Méltodo responsável por adicionar uma nova div na lista contendo o convidado e suas ações
    salvar() {

        //Variável "ehValido" recebe o retorno da função validar.
        let ehValido = this.validar()

        //Verifica de o valor retornado é verdadeiro, ou seja, o campo com nome foi digitado
        if (ehValido) {
            //variável contendo o valor do input
            let nomeConvidado = document.getElementById('inputConvidado').value

            if (elementoEditar == null) {
                //Trata-se de uma nova inserção

                //cria um elemento do tipo div e aponta pela variavel "linha"
                let linha = document.createElement("div")
                //cria um elemento do tipo span e aponta pela variável "spanNome"
                let spanNome = document.createElement("span")
                //Insere o texto contendo o nome do convidado no span
                spanNome.innerText = nomeConvidado
                //Adiciona a classe css "div" na div "linha"
                linha.classList.add("div")
                //Seta o atributo id da div "linha" contendo o prefixo "div-" concatenado com o contador global
                linha.setAttribute("id", "div-" + contador)
                //Insere o span dentro da div "linha" (spanNome é filho de linha)
                linha.appendChild(spanNome)

                //Cria um elemento do tipo "img" (imagem)
                let img = document.createElement("img")
                //Seta o atributo "onClick" da imagem, usando o objeto gerenciador e invocando o método remover
                //Passando o id completo como parâmetro
                img.setAttribute('onclick', "gerenciador.remover('div-" + contador + "')")
                //Seta o atributo src(caminho da imagem) para "img/lixeira.svg"
                img.setAttribute('src', "img/lixeira.svg")
                //Adiciona a classe CSS "imagem" em img
                img.classList.add("imagem")

                //Adiciona a imagem dentro da div "linha" (img é filha de linha)
                linha.appendChild(img)

                //Cria uma variável chamada editar que recebe um novo elemento do tipo "img"
                let editar = document.createElement("img")
                //Setar o atributo src(caminho da imagem)
                editar.setAttribute("src", "img/editar.svg")
                //Setar o atributo onClick da imagem
                editar.setAttribute("onclick", "gerenciador.editar('div-" + contador + "')")
                //Adiciona a classe "imagem" na imagem "editar"
                editar.classList.add("imagem")
                //Adiciona a imagem dentro da linha (editar é filha de linha)
                linha.appendChild(editar)

                //Adiciona a linha dentro da lista (linha é filha de lista)
                document.getElementById("lista").appendChild(linha)
                //Incrementa o contador para manter o controle dos elementos inseridos
                contador++
            } else {
                //Trata-se de uma edição
                elementoEditar.children[0].innerText = nomeConvidado
                //Voltar a flag pra null
                elementoEditar = null
            }

            //Invova o método limpar usando o objeto implícito (this)
            this.limpar()
        }
    }

    remover(id) {
        document.getElementById(id).remove()
    }

    editar(id) {
        // Busca o elemento a ser editado pelo id recebido e salva a referência na varial global elementoEditar
        elementoEditar = document.getElementById(id)
        //Pega o texto dentro do span que é o primeiro filho (posição 0) da div linha (elementoEditar)
        //Adiciona o valor no inputConvidado
        document.getElementById("inputConvidado").value = elementoEditar.children[0].textContent
    }

    validar() {
        //Pega o texto de dentro do inputConvidado
        let nomeConvidado = document.getElementById('inputConvidado').value
        //Verifica se foi digitado o nome no input
        if (nomeConvidado == "") {
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