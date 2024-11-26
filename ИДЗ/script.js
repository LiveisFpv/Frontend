document.addEventListener("DOMContentLoaded", () => {
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
});