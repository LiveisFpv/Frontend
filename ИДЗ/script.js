document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const content = document.getElementById("content");

    slider.addEventListener("input", () => {
        const value = slider.value;
        console.log(value);
        if (value == 100){
            slider_cont=document.getElementById("slider-container");
            slider_cont.style.display="none"
        }

        const offset = -100 + (value * 100)/100;

        content.style.transform=`translateX(${offset}%)`;
        console.log(content.style.transform);
    });
});