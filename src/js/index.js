'use strict'

import {cards} from "./cards"

const listOfCards = document.getElementById("item");
const backet = document.getElementById("backet");
const button = document.getElementById("sort");
const clear = document.getElementById("clear");


listOfCards.addEventListener("click", onClickToSelect);
button.addEventListener("click", onClickSort);
clear.addEventListener("click", onClear);

createMarkup(cards);

function createMarkup(cards) {
    const markup = cards.map(({ name, img }) =>
        `<li class ="list" id = "${name}" style="background: center / contain no-repeat url('${img}')">
            <div>
                <p></p>
            </div> 
        </li>`
    );
    const arrayOfCards = [];

    for (let i = 0; i < cards.length; i += 1) {
        arrayOfCards.push(markup[i]);
    }

    listOfCards.insertAdjacentHTML("beforeend", arrayOfCards.join(""));
}

function onClickToSelect(event) {
    cards.forEach((element) => {
        if (event.target.id === element.name) { 
            element.lastUsed = new Date().getTime();
            const markupSelectedCards = 
            `<li class ="list" id = "${element.name}" style="background: center / contain no-repeat url('${element.img}')">
                <div>
                    <p></p>
                </div> 
            </li>`;
            let arrayOfSelectedCards= [];
            arrayOfSelectedCards.push(markupSelectedCards);
            backet.insertAdjacentHTML("afterbegin", arrayOfSelectedCards.join(""));
        }
    })   
}

function byField(a, b) {
    if(a.lastUsed > b.lastUsed){
        return -1;
    }
}
function onClickSort() {
    destroyCards();
    createMarkup(cards.sort(byField));
}

function destroyCards(event) {
    listOfCards.innerHTML = '';
}

function onClear () {
    backet.innerHTML = '';
}