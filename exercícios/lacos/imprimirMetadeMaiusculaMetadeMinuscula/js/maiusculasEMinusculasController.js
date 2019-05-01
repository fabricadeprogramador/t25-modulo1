function imprimirMaiusculasEMinusculas(){

    let strArray = ["AhunaahduaGD", "aaaaasdsdds", "ADSHuASD", "JiAHiAJi", 
            "AhUGukLjh", "LajjkkaAAA", "ANAHA", "AHhhhahhA"]

    let span = document.getElementById("resultado")

    for(let i = 0; i < strArray.length; i++){
        if(i < (strArray.length / 2)){
            strArray[i] = strArray[i].toUpperCase()
        }else {
            strArray[i] = strArray[i].toLowerCase()
        }
    }

    span.innerText = strArray.join(" | ")
}