console.log('JS OK');

// ? Dichiarazioni variabili
let discount = null;
let ticketContent = null;


// Recupero elemento dalla pagina
const ticket = document.getElementById('ticket');
console.log(ticket)

const UserAge = document.getElementById('UserAge');
console.log(UserAge)

const UserKm = document.getElementById('UserKm');
console.log(UserKm)

//Chiedere il numero di km e assegnarlo ad una variaible
const km = parseInt(prompt('Quanti km vuoi percorrere?', '250'));
console.log(km);

//Chiedere l'età del passeggero e assegnarlo ad una variaible
const age = parseInt(prompt('Quanti anni hai?', '22'));
console.log(age);

// !VERIFICA
//Verifica che non sia stringa
if(isNaN(km) || isNaN(age)){
    alert('I dati inseriti devono essere numeri')
    ticketContent = 'Biglietto non valido'
//Verifica che l'età non sia superiore a 100 anni
}else if(age > 100){ 
    alert('Sei troppo vecchio')
    ticketContent = 'Biglietto non valido'
//Verifica che sia un numero positivo e maggiore di 0 (moltiplicando lo verifico in un unico passaggio)
}else if((km * age) <= 0){
    alert('I dati inseriti devono essere maggiori di 0')
    ticketContent = 'Biglietto non valido'
}else{
    //Se soddisfa tutte le condizioni richieste, calcola il prezzo del biglietto senza sconti
    const priceTicket = km * 0.21
    console.log(priceTicket)
    
    //Calcolare gli sconti
    if(age < 18){
        discount = ((20 * priceTicket) / 100)
    }else if(age > 65){
        discount = ((40 * priceTicket) / 100)
    }
    console.log(discount)
    
    //Assegno alla variabile il prezzo del biglietto arrottondando a due cifre dopo la virgola, qualora fossero presenti
    ticketContent = Math.round((priceTicket - discount) * 100) / 100 + '€';
}

//Inserisco il dato della variabile all' elemento. Se non ha soddisfatto le condizioni sarà un errore, altrimneti mostrerà il prezzo corretto
ticket.innerText = ticketContent;
UserKm.innerText = km + ' ' + 'km';
UserAge.innerText = age + ' ' + 'anni';



