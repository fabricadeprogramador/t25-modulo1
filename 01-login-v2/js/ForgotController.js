class ForgotController{

    recuperarUsuario(){
        let emailABuscar = document.getElementById("inputEmail").value

        if(emailABuscar != ""){
            let usuarioLS = JSON.parse(localStorage.getItem("usuario"))

            if(usuarioLS.email == emailABuscar){
                alert("Username: " + usuarioLS.username + "\n" + "Senha: " + usuarioLS.password)
                location.href = "login.html"
            } else {
                alert("E-mail não cadastrado!")
            }
        } else {
            alert("Preencha o campo de e-mail!")
        }
    }
}

let forgotController = new ForgotController()