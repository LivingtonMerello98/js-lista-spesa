'use strict'

//prendiamo l'id ul dal dom
const ul = document.getElementById('ul');

//arraylist spesa
const shoppingList = [
    'pomodori',
    'carote',
    'sedano',
    'lattuga',
    'acqua',
];

let i = 0; // Inizializzazione della variabile
while (i < shoppingList.length) { // Condizione di uscita
    const listItem = document.createElement('li'); // Creazione di un nuovo elemento li
    listItem.textContent = shoppingList[i]; // Impostazione del testo dell'elemento li con l'elemento corrente della lista della spesa
    ul.append(listItem);
    i++;
}
