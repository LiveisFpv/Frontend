
var AllCards=null;
var FavoriteCards=null
var currentCards=null
fetch('./data.json')
.then(response => response.json())
.then(json => {console.log(json)
    AllCards=json.Allcards
    console.log(AllCards)
    FavoriteCards=json.FavoriteCards
    currentCards=AllCards
})

const Select = document.getElementById("select_sort")
Select.addEventListener("change", selectOption);
const buttonAll = document.getElementById("b1");
const buttonSaved = document.getElementById("b2");
buttonAll.addEventListener("click", () => 
    {   currentCards = AllCards;
        displayCards(AllCards)
        selectOption()});
buttonSaved.addEventListener("click", () => 
    {   currentCards = FavoriteCards;
        displayCards(FavoriteCards)
        selectOption()});
function clickCards(e){
    
}
function selectOption() {
    selected=Select.options[Select.selectedIndex].value;
    sortCards(selected);
}

function sortCards(option) {
    let sortedCards = [...currentCards];
    if (option === "По фамилии") {
        displayCards(sortedCards.sort((a,b)=>{
            if (a.second_name.toLowerCase() < b.second_name.toLowerCase()) {
              return -1;
            }
            if (a.second_name.toLowerCase() > b.second_name.toLowerCase()) {
              return 1;
            }
            return 0;
    }));
    } 
    else if (option === "По имени") {
        displayCards(sortedCards.sort((a,b)=>{
            if (a.first_name.toLowerCase() < b.first_name.toLowerCase()) {
              return -1;
            }
            if (a.first_name.toLowerCase() > b.first_name.toLowerCase()) {
              return 1;
            }
            return 0;
    }));
    }
    else {
        displayCards(currentCards);
    }
}
function loadData(){
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        displayCards(AllCards);
    }, 1000);
}

function displayCards(cards) {
    const container = document.getElementById("cards");
    container.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement("div")
        cardElement.classList.add("frame3");

        const imageElement = document.createElement("img")
        imageElement.src = card.image;
        imageElement.alt = card.first_name+" "+card.second_name;
        imageElement.classList.add("image");

        const nameElement = document.createElement("p");
        nameElement.classList.add("name");
        nameElement.innerText = card.first_name+" "+card.second_name;

        const phoneElement = document.createElement("p");
        phoneElement.classList.add("phone");
        phoneElement.innerText = card.phone;

        cardElement.appendChild(imageElement);
        cardElement.appendChild(nameElement);
        cardElement.appendChild(phoneElement);
        container.appendChild(cardElement);

    });
}