export function createMarkup(cards) {
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