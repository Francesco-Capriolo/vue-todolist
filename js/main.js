/*
Rifare l 'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano(true / false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all 'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
    1 - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2 - cliccando sul testo dell 'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

const app = new Vue({
    el: '#app',
    data: {
        inputVal: "",
        list: [{
            text: 'acqua',
            cross: false,
        }],
        itemCompleted: false,
    },
    methods: {
        addVal(content, isCross) {
            if (content.trim() !== "") {
                const newList = {
                    text: content.trim(),
                    cross: isCross,
                }
                this.list.push(newList);
                this.inputVal = "";
            } else {
                console.warn("non hai inserito niente");
            }
        },

        removeVal(Toindex) {
            if (this.list[Toindex] !== undefined) {
                this.list.splice(Toindex, 1);
            } else {
                console.warn("non esiste questo elemento nella lista")
            }
        },

        check(toIndex) {
            if (this.list[toIndex] != undefined) {
                this.list[toIndex].cross = !this.list[toIndex].cross;
            } else {
                console.warn('Stai cercando di attivare una funzionalità su un elemento che non esiste dalla todo list');
            }
        }
    }
});