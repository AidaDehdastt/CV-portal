function showModal(text) {
    const modalBg = document.querySelector(".modal-bg");
    const modalText = document.querySelector(".modal-text");

    modalText.textContent = text;
    modalBg.style.display = "flex";
}

document.addEventListener("click", (e) => {
    const modalBg = document.querySelector(".modal-bg");

    if (e.target === modalBg) {
        modalBg.style.display = "none";
    }
});

let currentEgg = null;

document.addEventListener("click", (e) => {

    const clickedEgg = e.target.classList.contains("egg");

    if (clickedEgg) return;

    if (currentEgg) {
        currentEgg.remove();
        currentEgg = null;
        return;
    }

    const egg = document.createElement("div");
    egg.classList.add("egg");
    document.body.appendChild(egg);

    currentEgg = egg;



    egg.addEventListener("click", (e) => {
        e.stopPropagation();

        document.body.style.background =
            "linear-gradient(to right, hotpink, purple)";

        showModal("🎉 Du hittade påskägget!");
    });
});
