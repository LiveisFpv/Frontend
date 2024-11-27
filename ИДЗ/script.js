var Json=null

async function load(sortby){
    await fetch("./product.json")
    .then(responce => responce.json())
    .then(json =>{
        Json=json;
    });
    console.log(Json)
    for (const key in Json) {
        console.log(key)
        let element=document.getElementById(key);
        Json[key].forEach(item =>{
            console.log(item)
                element.innerHTML+=`
                <div class="product">
                    <h3>${item.name}</h3>
                    <p>${item.price}$</p>
                    <a href="#">Купить</a>
                </div>
                `;
        }) 
    }
}
document.addEventListener("DOMContentLoaded", async () => {
    await load("date")
    const slider = document.getElementById("slider");
    const content = document.getElementById("content");

    slider.addEventListener("input", () => {
        const value = slider.value;
        var lastValue = 0
        console.log(value);
        if (value == 100){
            slider_cont=document.getElementById("slider-container");
            slider_cont.style.display="none"
        }
        if (value < lastValue) {
            slider.value = lastValue;
            return;
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
    
});