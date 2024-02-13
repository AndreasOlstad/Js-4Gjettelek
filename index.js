
var tall = Math.round(Math.random()*100)


while (true) {
    let tekst = prompt("Skriv inn et tall mellom 1 og 100:");

if (tekst < tall) {
    alert (`Skriv ett tall som er høyere enn ${tekst}`)
} else if (tekst > tall) {
    alert (`Skriv ett tall som er lavere enn ${tekst}`)
} else {
    alert (`Gratulerer, du gjettet tallet, det var: ${tekst}`)
    break;
}
}


for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        document.write(j + " ");
    }
    document.write("<br>");
}


