document.addEventListener("DOMContentLoaded", async () => {
    await loadData();
    const form = document.getElementById("form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email_input = document.getElementById("email");
        const password_input = document.getElementById("password");
    })
});
async function loadData(){
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden")
        document.getElementById("main").style.display = "flex";
    }, 3000);
}