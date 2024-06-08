const field = document.querySelector(".field");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    field.innerHTML = "";
    const img = `<img class="img" src="./png/${Math.round(
        Math.random() * (6 - 1) + 1
    )}.png" alt="img">`;
    field.innerHTML = img;
})