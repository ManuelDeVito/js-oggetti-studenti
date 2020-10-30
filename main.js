// Procediamo quindi per gradi:
// creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
// creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
// tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.



$(document).ready(function(){

    var studente = {
        'nome': 'Manuel',
        'cognome': 'De Vito',
        'eta': '32'
    };

    for (var key in studente) {
        console.log(studente);
        console.log(studente[key]);
    }

    var studenti = [

        {
            'nome': 'Luca',
            'cognome': 'Morelli',
            'eta': '35'
        },
        {
            'nome': 'Giorgia',
            'cognome': 'Colagrande',
            'eta': '30'
        },
        {
            'nome': 'Roberto',
            'cognome': 'Pedica',
            'eta': '56'
        }
    ];

    for (var chiave in studenti) {
        console.log(studenti);
        console.log(studenti);
    }

    var nome_studente = prompt('Inserisci il nome dello studente');
    var cognome_studente = prompt('Inserisci il cognome dello studente');
    var eta_studente = prompt('Inserisci l\'eta dello studente');



    var nuovo_studente = {
        'nome': 'Marco',
        'cognome': 'Russano',
        'eta': '56'
    }
    studenti.push(nuovo_studente);



})
