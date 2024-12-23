document.addEventListener("DOMContentLoaded", async () => {
    await loadData();
    const form = document.getElementById("form");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const button = document.getElementById("subbutton");

    //Маска для телефона
    phoneInput.addEventListener("input", (e) => {
        let value = phoneInput.value.replace(/\D/g, "");
        value = value.substring(0, 11);
        let formattedValue = "+7 (";
        if (value.length > 1) formattedValue += value.substring(1, 4);
        if (value.length >= 5) formattedValue += ") " + value.substring(4, 7);
        if (value.length >= 8) formattedValue += "-" + value.substring(7, 9);
        if (value.length >= 10) formattedValue += "-" + value.substring(9, 11);
        phoneInput.value = formattedValue;
    });
    emailInput.addEventListener("input", (e) => {
        if (emailInput.value.length > 0) {
            console.log("button enabled");
            button.disabled=false;
        }  else{
            console.log("button disabled");
            button.disabled=true;
        }
    });

    button.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("button clicked");

        let isValid = true;

        //Валидация телефона
        const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            phoneError.classList.remove("hidden");
            isValid = false;
        } else {
            phoneError.classList.add("hidden");
        }

        // Валидация почты
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.classList.remove("hidden");
            isValid = false;
        } else {
            emailError.classList.add("hidden");
        }

        // Валидация пароля
        if (passwordInput.value.length < 6) {
            passwordError.classList.remove("hidden");
            isValid = false;
        } else {
            passwordError.classList.add("hidden");
        }

        // Если форма валидна, показываем лоудер
        if (isValid) {
            //loadData()
        }
    });
});
async function loadData(){
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden")
        document.getElementById("main").style.display = "flex";
    }, 3000);
}