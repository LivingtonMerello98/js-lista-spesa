Lista della spesa con ciclo while

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while in.

Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

const ul = document.getElementById('ul')

const shoppingList =[
    'pomodori',
    'carote',
    'sedano',
    'lattuga',
    'acqua',
]

let i;//inizializzazione della variabile
while{

    const listItem = document.createElement('li'); // Creazione di un nuovo elemento li
    listItem.textContent = shoppingList[i]; // Impostazione del testo dell'elemento li con l'elemento corrente della lista della spesa
    ul.appendChild(listItem); // Aggiunta dell'elemento li alla lista ul
    i++; // Incremento del contatore

}

