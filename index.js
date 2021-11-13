'use strict'

const cards = [
  { name: "card 1", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), img: 'https://cdn-icons-png.flaticon.com/512/18/18259.png'},
  { name: "card 2", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), img: 'https://cdn-icons-png.flaticon.com/512/18/18414.png'},
  { name: "card 3", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), img: 'https://cdn-icons-png.flaticon.com/512/18/18162.png'},
  { name: "card 4", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), img: 'https://cdn-icons-png.flaticon.com/512/20/20181.png'},
  { name: "card 5", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), img: 'https://cdn-icons-png.flaticon.com/512/18/18429.png'},
  { name: "card 6", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), img: 'https://cdn-icons-png.flaticon.com/512/18/18251.png'},
  { name: "card 7", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), img: 'https://cdn-icons-png.flaticon.com/512/18/18482.png'},
  { name: "card 8", lastUsed: new Date().getTime(), creationDate: new Date().getTime(), img: 'https://cdn-icons-png.flaticon.com/512/18/18173.png'}, 
]

const listOfCards = document.getElementById("item");
const backet = document.getElementById("backet");
const button = document.getElementById("sort");
const push = document.getElementById("push");


listOfCards.addEventListener("click", onClickCardDataChange);
button.addEventListener("click", onClickSort);
push.addEventListener("click", onClickPush);

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
        console.log(markup[i])
    }

    listOfCards.insertAdjacentHTML("beforeend", arrayOfCards.join(""));
}

function putCardIntoBasket(cards) {
    const markup = cards.map(({ name, img }) =>
        `<li class ="list" id = "${name}" style="background: center / contain no-repeat url('${img}')">
            <div>
                <p></p>
            </div> 
        </li>`
    );

    let arrayOfSelectedCards= [];

    for (let i = 0; i < onClickCardDataChange.length; i += 1) {
        arrayOfSelectedCards.push(markup[i])
    }
    backet.insertAdjacentHTML("beforeend", arrayOfSelectedCards.join(""));

}
function onClickPush () {
    onClickSort();
    putCardIntoBasket(cards);
}

function onClickCardDataChange(event) {
    cards.forEach((element) => {
        if (event.target.id === element.name) { 
            element.lastUsed = new Date().getTime()  
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