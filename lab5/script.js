const AllCards=[
    {   image: "image.png",
        name: "Антон Котиков",
        phone: "+7 920 472 32-23"
    },
    {   image: "image 1.png",
        name: "Диана Фролова",
        phone: "+7 920 472 32-23"
    },
    {   image: "image 2.png",
        name: "Анастасия Лебедева",
        phone: "+7 920 472 32-23"
    },
    {   image: "image 3.png",
        name: "Алина Давыдова",
        phone: "+7 920 472 32-23"
    }
]
function loadData(){
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        displayCards(cardsData);
    }, 300);
}
function displayCards(cards) {
    const container = document.getElementById("frame2");
    container.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement("div")
        cardElement.classList.add("frame3");

        const imageElement = document.createElement("img")
        imageElement.src = card.image;
        imageElement.alt = card.name;
        imageElement.classList.add("image");

        const nameElement = document.createElement("p");
        nameElement.classList.add("name");
        nameElement.innerText = card.name;

        const phoneElement = document.createElement("p");
        phoneElement.classList.add("phone");
        phoneElement.innerText = card.phone;

        cardElement.appendChild(imageElement);
        cardElement.appendChild(nameElement);
        cardElement.appendChild(phoneElement);
        container.appendChild(cardElement);

    });
}