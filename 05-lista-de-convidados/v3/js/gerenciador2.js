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
            let idadeConvidado = document.getElementById('inputIdade').value
            let sexo = document.querySelector('[type=radio]:checked').value
            
            let tabela = document.getElementById("tabela")

            let linha = document.createElement('tr')
            linha.setAttribute('id', 'linha-' + contador)

            let colunaNome = document.createElement('td')
            let colunaIdade = document.createElement('td')
            let colunaSexo = document.createElement('td')
            let colunaExcluir = document.createElement('td')
            let colunaEditar = document.createElement('td')

            colunaNome.innerText = nomeConvidado
            colunaIdade.innerText = idadeConvidado
            colunaSexo.innerText = sexo

            let imgExcluir = document.createElement('img')
            imgExcluir.setAttribute('src', 'img/lixeira.svg')
            imgExcluir.setAttribute('onclick', "gerenciador.remover('linha-" + contador + "')")
            imgExcluir.classList.add('imagem')

            let imagemEditar = document.createElement('img')
            imagemEditar.setAttribute('src', 'img/editar.svg')
            imagemEditar.setAttribute('onclick', "gerenciador.editar('linha-" + contador + "')")
            imagemEditar.classList.add('imagem')

            colunaExcluir.appendChild(imgExcluir)
            colunaEditar.appendChild(imagemEditar)

            linha.appendChild(colunaNome)
            linha.appendChild(colunaIdade)
            linha.appendChild(colunaSexo)
            linha.appendChild(colunaEditar)
            linha.appendChild(colunaExcluir)

            tabela.appendChild(linha)

            contador++

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
        document.getElementById('inputIdade').value = elementoEditar.children[1].textContent
    }

    validar() {
        //Pega o texto de dentro do inputConvidado
        let nomeConvidado = document.getElementById('inputConvidado').value
        let idadeConvidado = document.getElementById('inputIdade').value


        //Verifica se foi digitado o nome no input
        if (nomeConvidado == "") {
            alert("Digite o nome do convidado!")
            return false
        }

        if (idadeConvidado == "") {
            alert("Digite a idade do convidado!")
            return false
        }

        if(document.getElementById("masc").checked == false && document.getElementById("fem").checked == false){
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