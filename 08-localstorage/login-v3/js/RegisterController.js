class RegisterController {

    constructor(){
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
            
            for(let i = 0; i < this.lista.length; i++){
                if(this.lista[i].email == usuario.email){
                    alert("E-mail já cadastrado!")
                    return false
                }
            }
            
            return true
        } else {
            alert("Preencha todos os campos!")
            return false
        }

    }

    salvar() {
        let usuarioRetornado = this.lerDados()

        if( this.validar(usuarioRetornado) ){
            
            this.lista.push(usuarioRetornado)

            localStorage.setItem("listaUsuarios", JSON.stringify(this.lista))
            alert("Usuario salvo com sucesso!")

            location.href = "login.html"
        } 
    }
}

let registerController = new RegisterController()