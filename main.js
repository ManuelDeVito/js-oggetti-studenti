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
        console.log('Studente Principale');
    for (var key in studente) {
        console.log(key + ' : ' + studente[key]);
        // console.log(studente[key]);
    }

    var studenti = [

        {
            'nome': 'Luca',
            'cognome': 'Morelli',
            'eta': '35'
        },
        {
            'nome': 'Giorgio',
            'cognome': 'Agostinelli',
            'eta': '38'
        },
        {
            'nome': 'Roberto',
            'cognome': 'Pedica',
            'eta': '56'
        }
    ];
    console.log('Lista Studenti');

    for (var i = 0; i < studenti.length; i++) {

        var studente_corrente = studenti[i];

        var nome_studente_attuale = studente_corrente.nome;

        var cognome_studente_attuale = studente_corrente.cognome;

        var eta_studente_attuale = studente_corrente.eta;

        for (var key in studente_corrente) {

            if (key != 'eta') {
                // console.log(studente_corrente[key]);
                console.log(key + ' : ' + studente_corrente[key]);
            }

        }
    }




    var nome_studente = prompt('Inserisci il nome dello studente');
    var cognome_studente = prompt('Inserisci il cognome dello studente');
    var eta_studente = prompt('Inserisci l\'eta dello studente');



    var nuovo_studente = {
        'nome': nome_studente,
        'cognome': cognome_studente,
        'eta': eta_studente
    }


    studenti.push(nuovo_studente);
    console.log(studenti);



})
