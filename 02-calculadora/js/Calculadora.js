class Calculadora{

    constructor(){

    }

    somar(){
        var n1 = parseFloat(document.getElementById("input1").value)
        var n2 = parseFloat(document.getElementById("input2").value)

        var resultado = n1 + n2

        alert(resultado)
    }

    subtrair(){
        var n1 = parseFloat(document.getElementById("input1").value)
        var n2 = parseFloat(document.getElementById("input2").value)

        var resultado = n1 - n2

        alert(resultado)
   }

   multiplicar(){
        var n1 = parseFloat(document.getElementById("input1").value)
        var n2 = parseFloat(document.getElementById("input2").value)

        var resultado = n1 * n2

        alert(resultado)
   }

   dividir(){
        var n1 = parseFloat(document.getElementById("input1").value)
        var n2 = parseFloat(document.getElementById("input2").value)

        var resultado = n1 / n2

        alert(resultado)
   }
}

var calc = new Calculadora()