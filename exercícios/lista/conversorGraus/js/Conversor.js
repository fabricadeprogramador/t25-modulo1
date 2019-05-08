class ConversorGraus{

    converterCelsius(){
        let graus = document.getElementById("inputGrau").value

        if(graus == ""){
            alert("Preencha o campo com o grau!")
        } else {
            graus = parseFloat(graus)

            //Fórmula : °C = (°F − 32) ÷ 1, 8

            let grausCelsius = ( graus - 32 ) / 1.8 

            alert("O valor em graus Celsius é: " + grausCelsius)
        }
    }

    converterFahrenheit(){
        let graus = document.getElementById("inputGrau").value

        if(graus == ""){
            alert("Preencha o campo com o grau!")
        } else {
            graus = parseFloat(graus)

            //Fórmula : °F = °C × 1, 8 + 32

            let grausFahrenheit = ( graus * 1.8 ) + 32 

            alert("O valor em graus Fahrenheit é: " + grausFahrenheit)
        }
    }
}

let conversor = new ConversorGraus()