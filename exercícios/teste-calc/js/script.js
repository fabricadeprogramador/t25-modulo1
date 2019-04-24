class Calculadora{

    constructor(){
        this.joelma
        this.chimbinha
    }

    somar(banana, maca){
        return banana + maca
    }

    subtrair(){
        return this.joelma - this.chimbinha
    }

    calcular(){
        let n1 = parseFloat(document.getElementById("i1").value)
        let n2 = parseFloat(document.getElementById("i2").value)
        
        this.joelma = n1
        this.chimbinha = n2

        let resultado = this.subtrair()
        let resultado2 = this.somar(n1, n2)

        alert(resultado)
        alert(resultado2)

    }
    
}

let calc = new Calculadora()