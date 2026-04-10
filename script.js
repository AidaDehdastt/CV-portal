function showModal(text) {
    const modalBg = document.querySelector(".modal-bg");
    const modalText = document.querySelector(".modal-text");

    modalText.textContent = text;
    modalBg.style.display = "flex";
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-bg")) {
        document.querySelector(".modal-bg").style.display = "none";
    }
});

const easter = document.querySelector(".easter");

if (easter) {
    easter.addEventListener("click", () => {
        document.body.style.background = "pink";
    });
}

let code = "";

document.addEventListener("keydown", (e) => {
    code += e.key;

    if (code.includes("1337")) {
        showModal("🎉 Du hittade ett hemligt meddelande!");
        code = "";
    }
});
