class RegisterController {

    lerDados() {
        let usuario = {}

        usuario.nome = document.getElementById("nome").value
        usuario.email = document.getElementById("email").value
        usuario.username = document.getElementById("username").value
        usuario.password = document.getElementById("password").value

        return usuario
    }

    validar(usuario) {
        if (usuario.nome != "" && usuario.email != "" && usuario.username != "" && usuario.password != "") {
            return true
        }

        return false
    }

    salvar() {
        let usuarioRetornado = this.lerDados()

        if( this.validar(usuarioRetornado) ){
            localStorage.setItem("usuario", JSON.stringify(usuarioRetornado))
            alert("Usuario salvo com sucesso!")

            location.href = "login.html"
        } else {
            alert("Preencha todos os campos!")
        }     
    }
}

let registerController = new RegisterController()