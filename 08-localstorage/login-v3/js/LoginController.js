class LoginController {

    constructor() {
        this.lista = []
    }

    buscarUsuarios() {
        let usuariosLS = localStorage.getItem("listaUsuarios")

        if (usuariosLS == null) {
            localStorage.setItem("listaUsuarios", JSON.stringify(this.lista))
        } else {
            this.lista = JSON.parse(usuariosLS)
        }

    }

    autenticar() {
        let encontrou = false
        let username = document.getElementById("inputUsername").value
        let password = document.getElementById("inputPassword").value

        if (username != "" && password != "") {

            for (let i = 0; i < this.lista.length; i++) {
                if (this.lista[i].username == username && this.lista[i].password == password) {
                    alert("Login efetuado com sucesso!")
                    encontrou = true
                    location.href = "home.html"
                }
            }

            if (!encontrou) {
                alert("Username ou senha inválidos!")
            }

        } else {
            alert("Preencha todos os campos!")
        }
    }
}

let loginController = new LoginController()