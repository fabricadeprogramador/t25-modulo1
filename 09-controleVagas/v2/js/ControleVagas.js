class ControleVagas {

    constructor() {
        this.vagas = [false, false, false, false, false]
    }

    carregarLocalStorage(){
        if ( localStorage.getItem("A") == null ){
            localStorage.setItem("A", JSON.stringify(this.vagas))
        } else {
            this.vagas = JSON.parse(localStorage.getItem("A"))
        }

        this.definirCores()
    }

    definirCores() {

        for (let i = 0; i < this.vagas.length; i++) {
            document.getElementById(`A${i+1}`).classList.remove("ocupado")
            document.getElementById(`A${i+1}`).classList.remove("desocupado")

            if (this.vagas[i] == true) {
                document.getElementById(`A${i+1}`).classList.add("ocupado")
            } else {
                document.getElementById(`A${i+1}`).classList.add("desocupado")
            }
        }
    }

    setarVaga(posicao) {

        this.vagas[posicao] = !this.vagas[posicao]
        localStorage.setItem("A", JSON.stringify(this.vagas))
        this.definirCores()
    }
}

let controller = new ControleVagas()