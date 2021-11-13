'use strict'

const cards = [
  { name: "card 1", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 2", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 3", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 4", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 5", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 6", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  { name: "card 7", lastUsed: new Date().getTime(), creationDate: new Date().getTime() },
  {name: "card 8", lastUsed: new Date().getTime(), creationDate: new Date().getTime()}, 
]

const listOfCards = document.getElementById("item");
const button = document.getElementById("sort");

listOfCards.addEventListener("click", onClickCardDataChange);
button.addEventListener("click", onClickSort);

createMarkup(cards);

function createMarkup(cards) {
    const markup = cards.map(({ name }) =>
        `<li class ="list" id = "${name}">
            <div>
                <p>${name}</p>
            </div> 
        </li>`
    );
    const arrayOfCards = [];

    for (let i = 0; i < cards.length; i += 1) {
        arrayOfCards.push(markup[i]);
    }
    listOfCards.insertAdjacentHTML("beforeend", arrayOfCards.join(""));
}

  
function onClickCardDataChange(event) {
    cards.forEach((element) => {
        if (event.target.id === element.name) { element.lastUsed= new Date().getTime()  }
    })   
}

function onClickSort() {
    destroyCards();
    createMarkup(cards.sort(byField));
}

function byField(a, b) {
    if(a.lastUsed > b.lastUsed){
        return -1;
    }
}
function destroyCards() {
    listOfCards.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  

  //1. При нажатии на кнопку Sort картинки должны перерендириться в соответствии с ключем обьекта lastUsed (последнее использование lastUsed должно быть сверху списка