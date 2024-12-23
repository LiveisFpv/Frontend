var Json = null;
var lastValue = 0
async function load(sortBy = "date") {
    await fetch("./product.json")
        .then(response => response.json())
        .then(json => {
            Json = json;
        });

    const categoryContainer = document.getElementById("category");
    categoryContainer.innerHTML = "";

    for (const key in Json){
        // Сортировка продуктов
        products=Json[key]
        products.sort((a, b) => {
            if (sortBy === "date") return new Date(b.date) - new Date(a.date);
            if (sortBy === "popularity") return b.popularity - a.popularity;
            if (sortBy === "priceAsc") return a.price - b.price;
            if (sortBy === "priceDesc") return b.price - a.price;
        });
        categoryContainer.innerHTML+=`
        <div id="${key}">
            <img src="${key}.png" alt="${key}">
            <h2>${key.toUpperCase()}</h2>
            </div>
        `
        Container=document.getElementById(key)
        // Отрисовка продуктов
        products.forEach(product => {
            Container.innerHTML += `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p>${product.price}$</p>
                    <a href="#">Купить</a>
                </div>
            `;
        });
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    await load("date")
    const slider = document.getElementById("slider");
    const content = document.getElementById("content");

    slider.addEventListener("input", () => {
        const value = parseInt(slider.value, 10);
        console.log(value);
        if (value < lastValue) {
            slider.value = lastValue;
            return;
        }
        if (value == 100){
            slider_cont=document.getElementById("slider-container");
            slider_cont.style.display="none"
        }
        lastValue = value;
        const offset = -100 + (value * 100)/100;

        content.style.transform=`translateX(${offset}%)`;
        const percentage = (value * 100) / slider.max;
        slider.style.background = `linear-gradient(to right, transparent ${percentage}%, #4caf50 ${percentage}%)`;
        console.log(content.style.transform);
    });
    const buyLink = document.getElementById("buy");
    const menu = document.getElementById("menu");
    buyLink.addEventListener("click", function (event) {
        event.preventDefault();
        if ( menu.style.display=="none" ) {
            menu.style.display="flex";
        } else{
            menu.style.display="none";
        }
    });
    document.getElementById("sort").addEventListener("change", async (event) => {
        await load(event.target.value);
    });
});