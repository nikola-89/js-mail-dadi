// Gioco dei dadi, chi fa di più vince

var numUser0 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log('User0: ' + numUser0);
var numUser1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log('User1: ' + numUser1);

if(numUser0 > numUser1) {
    console.log('User0 WIN')
}
else if(numUser0 == numUser1) {
    console.log('Pari.');
}
else {
    console.log('User1 WIN')
}
