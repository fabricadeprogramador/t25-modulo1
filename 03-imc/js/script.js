class CalculadoraIMC {

    calcularIMC() {

        if (document.getElementById("peso").value == "" || document.getElementById("altura").value == "") {
            alert("Um ou mais campos vazios!");
        } else {
            var peso = parseFloat(document.getElementById("peso").value);
            var altura = parseFloat(document.getElementById("altura").value);

            var resultado = peso / (altura * altura);
            alert("Seu IMC é: " + resultado.toFixed(2))
        }
    }
}

var calculadora = new CalculadoraIMC();