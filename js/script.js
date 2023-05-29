console.log('JS OK');

// ? Dichiarazioni variabili
let discount = null;
let ticketContent = null;
let priceTicket = null;
let pricePerKm = 0.21;
let type = null; 
const max = 10;

const biglietto = document.getElementById('biglietto');
console.log(biglietto)

const annulla = document.getElementById('annulla');
console.log(annulla)

const UserAge = document.getElementById('UserAge');
console.log(UserAge)

const UserKm = document.getElementById('UserKm');
console.log(UserKm)

const ticket = document.getElementById('ticket');
console.log(ticket)

const ticketCard = document.getElementById('ticket-card');

const UserName = document.getElementById('name');
console.log(name.value)

const UserLastname = document.getElementById('lastname');
console.log(lastname.value)

const UserType = document.getElementById('UserType');

const carriage = document.getElementById('carriage');

const ticketName = document.getElementById('ticketName');

const trainCode = document.getElementById('train-code');





//Quando clicco sul button
biglietto.addEventListener('click', function () {

    //leggo il valore degli input
    const name = UserName.value.trim()
    const lastname = UserLastname.value.trim()

    const km = UserKm.value
    const age = UserAge.value
    console.log(`Nome ${name}, Cognome ${lastname}, Età ${age}, km ${km}`)

    // !VERIFICA (verifico separatamente per poter inserire alert più specifici)
    //Verifica che siano lettere o numeri
    if (isNaN(km) || isNaN(age) || !isNaN(name) || !isNaN(lastname)) {
        alert("Nei campi nome e cognome devono essere presenti solo lettere \nNei campi Km e età devono essere presenti solo numeri")
        ticketContent = 'Biglietto non valido'
        //Verifica che l'età non sia superiore a 100 anni
    } else if (age > 100) {
        alert('Sei troppo vecchio')
        ticketContent = 'Biglietto non valido'
        //Verifica che sia un numero positivo e maggiore di 0 (moltiplicando lo verifico in un unico passaggio)
    } else if ((km * age) <= 0) {
        alert('I dati inseriti devono essere maggiori di 0')
        ticketContent = 'Biglietto non valido'
    } else {
        // Se soddisfa tutte le condizioni richieste per prima cosa rendo visibile il biglietto
        ticketCard.classList.remove('d-none');
        ticketCard.classList.add('show');
        //Calcola il prezzo del biglietto senza sconti
        const priceTicket = km * pricePerKm
        console.log(`Prezzo del biglietto: ${priceTicket}`)

        //Calcolare gli sconti
        if (age < 18) {
            discount = ((20 * priceTicket) / 100)
            type = 'Minorenne, sconto del 20%';
        } else if (age > 65) {
            discount = ((40 * priceTicket) / 100)
            type = 'Over 65, sconto del 40%';
        } else {
            discount = null;
            type = 'Adulto';
        }
        console.log(`Lo sconto è ${discount}`)

        //Assegno alla variabile il prezzo del biglietto arrottondando a due cifre dopo la virgola, qualora fossero presenti
        ticketContent = Math.round((priceTicket - discount) * 100) / 100 + '€';
        console.log(`Il costo del biglietto scontato è: ${ticketContent}`);

        // Inserisco i valori nel DOM
        // Prezzo
        ticket.innerText = ticketContent;
        // Nome e Cognome
        ticketName.innerText = (name + ' ' + lastname).toUpperCase();
        // "Tipo" di passeggero
        UserType.innerText = type;
        // Carrozza
        carriage.innerText = 'Carrozza numero ' + parseInt(Math.floor(Math.random() * max) + 1);
        // Codice del treno
        trainCode.innerText = '17' + parseInt(Math.floor(Math.random() * 100) + 100);
    }
})


//Inserisco il dato della variabile all' elemento. Se non ha soddisfatto le condizioni sarà un errore, altrimneti mostrerà il prezzo corretto
// UserKm.innerText = km + ' ' + 'km';
// UserAge.innerText = age + ' ' + 'anni';



annulla.addEventListener('click', function () {
    document.querySelector('UserKm').value = null;
    console.log(UserKm.value)
})
