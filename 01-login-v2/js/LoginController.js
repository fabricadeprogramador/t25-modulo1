class LoginController{

    autenticar(){
        let username = document.getElementById("inputUsername").value
        let password = document.getElementById("inputPassword").value

        if(username != "" && password != ""){
            let usuarioLS = JSON.parse(localStorage.getItem("usuario"))

            if(usuarioLS.username == username && usuarioLS.password == password){
                alert("Login efetuado com sucesso!")
                location.href = "home.html"
            } else {
                alert("Username ou senha inválidos!")
            }
        } else {
            alert("Preencha todos os campos!")
        }
    }
}

let loginController = new LoginController()