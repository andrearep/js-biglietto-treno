//chiediamo all'utente km e età
var km = parseInt(prompt("mi dica un po', quanti chilometri vuole percorrere?"));
var age = parseInt(prompt("quanti anni ha?"));
console.log(km);
console.log(age);

//variabile prezzp


// validazione valori inseriti

if (isNaN(age || isNaN(km))) {
    console.log("La tua età non può essere un testo, sei di questo pianeta?");
} else if (age < 0) {

    var msg = document.getElementById("msg").innerHTML = ("età negativa? Sembri giovane sì, ma così è un  po' eccessivo non credi?");

} else if (km < 0) {

    var msg = document.getElementById("msg").innerHTML = ("Siamo spesso in ritardo, ma tratte con distanza negativa ancora non ne facciamo, spiace");

} else if (km == 0) {

    var msg = document.getElementById("msg").innerHTML = ("fammi capire come posso esserti d'aiuto allora, hai bisogno solo di qualcuno con cui parlare?");

} else {
    //calcolo prezzo
    var prezzo = km * 0.21;

    if (age <= 18) {
        prezzo = prezzo * 0.8;
        var msg = document.getElementById("msg").innerHTML = "dato che sei un cucciolo ti abbiamo fatto il 20% DI SCONTO, perciò dovrai solo pagare ------ " + prezzo.toFixed(2) + "  €";
    }
    else if (age >= 65) {
        prezzo = prezzo * 0.6;
        var msg = document.getElementById("msg").innerHTML = "dato che sei un veterano ti abbiamo fatto il 40% DI SCONTO, perciò dovrai solo pagare ------ " + prezzo.toFixed(2) + "  €";
    } else if (age > 110) {
        console.log("se sei arrivato veramente a questa età e vuoi prendere il treno te lo pago io il biglietto");
    } else {
        var msg = document.getElementById("msg").innerHTML = "il suo biglietto costa ------ " + prezzo.toFixed(2) + "  €";
    }
}








