window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

    function makeSquares(num) {
        for (let i = 0; i < num; i++) {
            const element = document.createElement("div");
            element.classList.add("square");
            container.append(element);

            element.addEventListener("mouseover", () => setColor(element));

            element.addEventListener("mouseleave", () => removeColor(element));
        }
    }

    function setColor(el) {
        let random = Math.floor(Math.random() * colors.length);
        el.style.backgroundColor = colors[random];
        el.style.boxShadow = `0 0 2px ${colors[random]}, 0 0 10px ${colors[random]}`;
    }

    function removeColor(el) {
        el.style.backgroundColor = '#1d1d1d';
        el.style.boxShadow = `0 0 2px #000`;
    }

    makeSquares(1596);
});