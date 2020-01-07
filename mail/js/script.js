var listaEmail = ['nietzsche@gmail.com', 'kant@gmail.com', 'schopenhauer@gmail.com', 'hegel@gmail.com', 'heidegger@gmail.com'];

var userEmail = prompt('Inserisci la tua email:');

var auth = false;

for (var i = 0; i < listaEmail.length; i++) {
    if(listaEmail[i] == userEmail) {
        auth = true;
    }
}

if(auth == true) {
    alert('200 | OK');
}
else {
    alert('401 | Unauthorized');
}
