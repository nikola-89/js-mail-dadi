// Gioco dei dadi, chi fa di più vince

var numUser0 = parseInt(prompt('USER_0 = Inserisci un numero da 1 a 6:'));
var numUser1 = parseInt(prompt('USER_1 = Inserisci un numero da 1 a 6:'));

if(isNaN(numUser0) || isNaN(numUser1)) {
    alert('Non hai inserito un numero.');
}
else {
    if(numUser0 <= 6 && numUser1 <= 6 && numUser0 != 0 && numUser1 != 0) {
        if(numUser0 > numUser1) {
            alert('USER_0 Vince.');
        }
        else if(numUser0 == numUser1) {
            alert('Pari.');
        }
        else {
            alert('USER_1 Vince.');
        }
    }
    else {
        alert('Numero non consentito.');
    }
}
