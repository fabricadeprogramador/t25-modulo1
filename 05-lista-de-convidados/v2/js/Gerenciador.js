class Gerenciador {
    adicionar() {
        
        let Ehvalido = this.validar()

        if (Ehvalido){

        let nomeConvidado = document.getElementById('inputConvidado').value
        let div = document.createElement("div")
        div.innerText = nomeConvidado
        
        let img = document.createElement("img")
        img.setAttribute('onclick','gerenciador.remover()')
        img.setAttribute('src',"img/lixeira.svg")
        img.classList.add("imagem")

        document.getElementById("lista").appendChild(div)
            div.appendChild(img)
        this.limpar()
        }

        
    }
    remover(){
            
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