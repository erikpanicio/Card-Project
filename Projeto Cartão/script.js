var cardnumber = document.querySelector(".cardnumber").innerText
cardnumber = cardnumber.replace(/\s/g,'')

vetor_cardnumber = []

for(var i=0; i<cardnumber.length; i++){
    console.log(vetor_cardnumber.push(cardnumber[i]))
}

var insert_cardnumber

function adicionar() {
    insert_cardnumber = document.querySelector("input.insert-cardnumber").value   
    alert(insert_cardnumber)
}