let valor = 0
//let operacao = null
function result(){
    if(operacao == "+"){
        let valor2 = Number(window.document.getElementById("txtn1").value)
        let res = valor + valor2
        let resultado2 = document.getElementById("res").innerHTML
        console.log(res)
        document.getElementById("historico").innerHTML = `${document.getElementById("historico").innerHTML} ${resultado2} ${valor2} = ${res}<br/>`
        document.getElementById("txtn1").value = ""
    } else if(operacao == "-"){
        let valor2 = Number(window.document.getElementById("txtn1").value)
        let resultado2 = document.getElementById("res").innerHTML
        let res = valor - valor2
        console.log(res)
        document.getElementById("historico").innerHTML = `${document.getElementById("historico").innerHTML} ${resultado2} ${valor2} = ${res}<br/>`
        document.getElementById("txtn1").value = ""
    } else if(operacao == "/"){
        let valor2 = Number(window.document.getElementById("txtn1").value)
        let resultado2 = document.getElementById("res").innerHTML
        let res = valor / valor2
        document.getElementById("historico").innerHTML = `${document.getElementById("historico").innerHTML} ${resultado2} ${valor2} = ${res}<br/>`
        document.getElementById("txtn1").value = ""       
    } else if(operacao == "*"){
        let valor2 = Number(window.document.getElementById("txtn1").value)
        let resultado2 = document.getElementById("res").innerHTML
        let res = valor * valor2
        document.getElementById("historico").innerHTML = `${document.getElementById("historico").innerHTML} ${resultado2} ${valor2} = ${res}<br/>`
        document.getElementById("txtn1").value = ""
    }
    document.getElementById("res").innerHTML = ""
}
    function somar(){
        valor = Number(window.document.getElementById("txtn1").value)
        if(valor != ""){
            operacao = "+"
            
            let res = document.getElementById("res")
            document.getElementById("txtn1").value = ""
            if(res.innerHTML != ""){
                res.innerHTML = `${valor} ${operacao} ${res.innerHTML}`
                console.log("Entrou Cheio")
            }else{
                res.innerHTML = `${valor} ${operacao}`
                console.log("Entrou vazio")
            }
            console.log("valor", valor)
            console.log(valor)
        }
    }
    function menos(){
       valor = Number(document.getElementById("txtn1").value)
       operacao = "-"
       let img = document.getElementById("imagem") 
       let res = document.getElementById("res")
        res.innerHTML = `${valor} ${operacao}`
        document.getElementById("txtn1").value = ""
    }

    function dividir(){
        valor = Number(document.getElementById("txtn1").value)
        operacao = "/"
        let res = document.getElementById("res")
        res.innerHTML = `${valor} ${operacao}`
        document.getElementById("txtn1").value = ""
        if(valor == 0){
            res.innerHTML = "Deu Ruim"
        }
        
    }
    function multiplicar(){
        valor = Number(document.getElementById("txtn1").value)
        operacao = "*"
        let res = document.getElementById("res")
        res.innerHTML = `${valor} ${operacao}`
        document.getElementById("txtn1").value = ""
    }
