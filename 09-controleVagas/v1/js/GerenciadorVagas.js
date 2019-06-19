class GerenciadorVagas {

    constructor() {
        this.A = []
        this.B = []
        this.C = []
        this.D = []
    }

    carregarCarrosRegistrados(){
        let lsA = localStorage.getItem("A")
        let lsB = localStorage.getItem("B")
        let lsC = localStorage.getItem("C")
        let lsD = localStorage.getItem("D")

        if(lsA == null){
            localStorage.setItem("A", "[]")
        } else {
            this.A = JSON.parse(lsA)
        }

        if(lsB == null){
            localStorage.setItem("B", "[]")
        } else {
            this.B = JSON.parse(lsB)
        }

        if(lsC == null){
            localStorage.setItem("C", "[]")
        } else {
            this.C = JSON.parse(lsC)
        }

        if(lsD == null){
            localStorage.setItem("D", "[]")
        } else {
            this.D = JSON.parse(lsD)
        }
    }

    lerDados() {
        let carro = {}

        carro.marca = document.getElementById("marca").value
        carro.modelo = document.getElementById("modelo").value
        carro.ano = document.getElementById("ano").value
        carro.placa = document.getElementById("placa").value
        carro.area = document.getElementById("area").value

        return carro
    }

    limpar() {

        document.getElementById("marca").value = ""
        document.getElementById("modelo").value = ""
        document.getElementById("ano").value = ""
        document.getElementById("placa").value = ""
        document.getElementById("area").value = ""

    }

    validar(carro) {
        if (carro.marca == "" || carro.modelo == "" || carro.ano == "" || carro.placa == "" || carro.area == "") {
            alert("Preencha todos os campos!")
            return false
        } else {
            for (let i = 0; i < this.A.length; i++) {
                if (carro.placa == this.A[i].placa) {
                    alert("Placa já registrada na região A!")
                    return false
                }
            }

            for (let i = 0; i < this.B.length; i++) {
                if (carro.placa == this.B[i].placa) {
                    alert("Placa já registrada na região B!")
                    return false
                }
            }

            for (let i = 0; i < this.C.length; i++) {
                if (carro.placa == this.C[i].placa) {
                    alert("Placa já registrada na região C!")
                    return false
                }
            }

            for (let i = 0; i < this.D.length; i++) {
                if (carro.placa == this.D[i].placa) {
                    alert("Placa já registrada na região D!")
                    return false
                }
            }

            return true
        }
    }

    registrar() {

        let carroRetornado = this.lerDados()

        if (this.validar(carroRetornado)) {
           switch (carroRetornado.area){
               case "A": 
                        if(this.A.length < 10){
                            this.A.push(carroRetornado)
                            localStorage.setItem("A", JSON.stringify(this.A))
                            alert("Carro adicionado com sucesso na área A!")
                        } else {
                            alert("Área A está lotada!")
                        }
                        break
                case "B" :
                        if(this.B.length < 10){
                            this.B.push(carroRetornado)
                            localStorage.setItem("B", JSON.stringify(this.B))
                            alert("Carro adicionado com sucesso na área B!")
                        } else {
                            alert("Área B está lotada!")
                        }
                        break
                case "C" :
                        if(this.C.length < 10){
                            this.C.push(carroRetornado)
                            localStorage.setItem("C", JSON.stringify(this.C))
                            alert("Carro adicionado com sucesso na área C!")
                        } else {
                            alert("Área C está lotada!")
                        }
                        break
                case "D" :
                        if(this.D.length < 10){
                            this.D.push(carroRetornado)
                            localStorage.setItem("D", JSON.stringify(this.D))
                            alert("Carro adicionado com sucesso na área D!")
                        } else {
                            alert("Área D está lotada!")
                        }
                        break
           }
        }

        this.limpar()
    }
}

let gerenciador = new GerenciadorVagas()