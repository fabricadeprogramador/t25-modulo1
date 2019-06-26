class GerenciadorEstacionamento {

    constructor() {
        this.A = []
        this.B = []
        this.C = []
        this.D = []
    }

    definirVagas() {

        let A = localStorage.getItem("A")
        let B = localStorage.getItem("B")
        let C = localStorage.getItem("C")
        let D = localStorage.getItem("D")

        let modelo = [{
                ocupado: false
            },
            {
                ocupado: false
            },
            {
                ocupado: false
            },
            {
                ocupado: false
            },
            {
                ocupado: false
            },
            {
                ocupado: false
            },
            {
                ocupado: false
            },
            {
                ocupado: false
            },
            {
                ocupado: false
            },
            {
                ocupado: false
            }
        ]

        if (A != null) {
            this.A = JSON.parse(A)
        } else {
            localStorage.setItem("A", JSON.stringify(modelo))
            this.A = modelo
        }

        if (B != null) {
            this.B = JSON.parse(B)
        } else {
            localStorage.setItem("B", JSON.stringify(modelo))
            this.B = modelo
        }

        if (C != null) {
            this.C = JSON.parse(C)
        } else {
            localStorage.setItem("C", JSON.stringify(modelo))
            this.C = modelo
        }

        if (D != null) {
            this.D = JSON.parse(D)
        } else {
            localStorage.setItem("D", JSON.stringify(modelo))
            this.D = modelo
        }

        for (let i = 0; i < this.A.length; i++) {
            document.getElementById(`vagaA${i+1}`).classList.remove("ocupado")
            document.getElementById(`vagaA${i+1}`).classList.remove("desocupado")
            if (this.A[i].ocupado) {
                document.getElementById(`vagaA${i+1}`).classList.add("ocupado")
            } else {
                document.getElementById(`vagaA${i+1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.B.length; i++) {
            document.getElementById(`vagaB${i+1}`).classList.remove("ocupado")
            document.getElementById(`vagaB${i+1}`).classList.remove("desocupado")
            if (this.B[i].ocupado) {
                document.getElementById(`vagaB${i+1}`).classList.add("ocupado")
            } else {
                document.getElementById(`vagaB${i+1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.C.length; i++) {
            document.getElementById(`vagaC${i+1}`).classList.remove("ocupado")
            document.getElementById(`vagaC${i+1}`).classList.remove("desocupado")
            if (this.C[i].ocupado) {
                document.getElementById(`vagaC${i+1}`).classList.add("ocupado")
            } else {
                document.getElementById(`vagaC${i+1}`).classList.add("desocupado")
            }
        }

        for (let i = 0; i < this.D.length; i++) {
            document.getElementById(`vagaD${i+1}`).classList.remove("ocupado")
            document.getElementById(`vagaD${i+1}`).classList.remove("desocupado")
            if (this.D[i].ocupado) {
                document.getElementById(`vagaD${i+1}`).classList.add("ocupado")
            } else {
                document.getElementById(`vagaD${i+1}`).classList.add("desocupado")
            }
        }
    }

    vagaSelecionada(posicao) {
        let area = posicao[0]
        let vaga = parseInt(posicao[1])

        if (posicao.length == 2) {
            switch (area) {
                case 'A':
                    this.A[vaga - 1].ocupado = !this.A[vaga - 1].ocupado
                    localStorage.setItem("A", JSON.stringify(this.A))
                    this.definirVagas()
                    break;
                case 'B':
                    this.B[vaga - 1].ocupado = !this.B[vaga - 1].ocupado
                    localStorage.setItem("B", JSON.stringify(this.B))
                    this.definirVagas()
                    break;
                case 'C':
                    this.C[vaga - 1].ocupado = !this.C[vaga - 1].ocupado
                    localStorage.setItem("C", JSON.stringify(this.C))
                    this.definirVagas()
                    break;
                case 'D':
                    this.D[vaga - 1].ocupado = !this.D[vaga - 1].ocupado
                    localStorage.setItem("D", JSON.stringify(this.D))
                    this.definirVagas()
                    break;
            }
        } else {
            switch (area) {
                case 'A':
                    this.A[9].ocupado = !this.A[9].ocupado
                    localStorage.setItem("A", JSON.stringify(this.A))
                    this.definirVagas()
                    break;
                case 'B':
                    this.B[9].ocupado = !this.B[9].ocupado
                    localStorage.setItem("B", JSON.stringify(this.B))
                    this.definirVagas()
                    break;
                case 'C':
                    this.C[9].ocupado = !this.C[9].ocupado
                    localStorage.setItem("C", JSON.stringify(this.C))
                    this.definirVagas()
                    break;
                case 'D':
                    this.D[9].ocupado = !this.D[9].ocupado
                    localStorage.setItem("D", JSON.stringify(this.D))
                    this.definirVagas()
                    break;
            }
        }
    }
}

let gerenciador = new GerenciadorEstacionamento()