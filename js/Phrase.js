/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase;
     }

     get addPhraseToDisplay() {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        ul.appendChild(li);

        if (arr[i] !== ' ') {
            li.classList.add('letter');
        } else {
            li.classList.add('space');
        }
    }
}

    get checkLetter () {
    let phraseItem = ul.children;
    let correct = null;

    for (let i = 0; i < phraseItem.length; i++) {
        const character = phraseItem[i].textContent.toLowerCase();

        if (btn.textContent === character) {
            phraseItem[i].classList.add('show');
            correct = true;
        }
    }
    return correct;
}
 }
