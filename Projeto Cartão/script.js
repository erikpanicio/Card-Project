var div_cardname = document.querySelector(".cardname")

function adicionar1() {
    var insert_cardname = document.querySelector("input.insert-cardname").value
    div_cardname.innerHTML = insert_cardname
}














var div_cardnumber = document.querySelector(".cardnumber")
var text_cardnumber = document.querySelector(".cardnumber").innerText
text_cardnumber = text_cardnumber.replace(/\s/g,'')

vetor_cardnumber = []

for(var i=0; i<text_cardnumber.length; i++){
    console.log(vetor_cardnumber.push(text_cardnumber[i]))
}

function adicionar2() {
    var insert_cardnumber = document.querySelector("input.insert-cardnumber").value
   /*  alert(insert_cardnumber) */

    for(var i=0; i<insert_cardnumber.length; i++){
        vetor_cardnumber[i] = insert_cardnumber[i]

        div_cardnumber.innerHTML = vetor_cardnumber.join("")
    }
}






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
    alert(typeof(insert_month))
}

var ano_limite = (new Date().getFullYear()) + 5
var insert_year = document.querySelector("input.insert-year")
insert_year.max = ano_limite /* arrumar */


var div_cvc = document.querySelector(".cvc")

function adicionar4() {
    var insert_cvc = document.querySelector("input.insert-cvc").value
    div_cvc.innerHTML = insert_cvc
}