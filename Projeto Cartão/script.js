var div_cardname = document.querySelector(".cardname")

function adicionar1() {
    var insert_cardname = document.querySelector("input.insert-cardname").value
    div_cardname.innerHTML = insert_cardname
}














var divCardnumber = document.querySelector(".cardnumber")

function adicionar2() {
    var inputCardnumber = document.querySelector("input.insert-cardnumber")
    inputCardnumberValue = inputCardnumber.value /* números digitados no input */
    inputCardnumberLength = inputCardnumberValue.length

    if(inputCardnumberLength === 4 || inputCardnumberLength === 9 || inputCardnumberLength === 14) { /* automatizar */
        inputCardnumber.value += " " /* value do input do html */
    }

    divCardnumber.innerHTML = inputCardnumberValue
}

/* ele volta automático para o valor padrão mas a lista está atualizando para mostrar naada já que nela não tem nada */



/* Date */

var div_date = document.querySelector(".date")

function adicionar3() {
    var insert_month = document.querySelector("input.insert-month").value
    var insert_year = document.querySelector("input.insert-year").value

    if(insert_month == ""){
        insert_month = "00"
    }
    if(insert_year == ""){
        insert_year = "00"
    }

    div_date.innerHTML = `${insert_month}/${insert_year}`
}

var ano_limite = ((new Date().getFullYear()) + 5) - 2000
var insert_year = document.querySelector("input.insert-year")
insert_year.max = ano_limite


var div_cvc = document.querySelector(".cvc")

function adicionar4() {
    var insert_cvc = document.querySelector("input.insert-cvc").value
    div_cvc.innerHTML = insert_cvc
}