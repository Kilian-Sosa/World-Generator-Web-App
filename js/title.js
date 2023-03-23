const text = getCookie("language") === "" || getCookie("language") === "en" ? "World Generator": "Generador de Mundos";


const element = document.getElementById('bubble-hover');

const addHoverListeners = (charEls) => {
    const removeClasses = () => {
        charEls.forEach((charEl) => {
        charEl.classList.remove("hovered", "hovered-adjacent");
        });
    };

    charEls.forEach((charEl) => {
        charEl.addEventListener("mouseover", (e) => {
            removeClasses();
            const index = parseInt(e.target.getAttribute("data-index"), 10);
            const prevIndex = index === 0 ? null : index - 1;
            const nextIndex = index === text.length - 1 ? null : index + 1; 

            const prevElement = prevIndex !== null && document.querySelector(`[data-index='${prevIndex}']`);
            const nextElement = nextIndex !== null && document.querySelector(`[data-index='${nextIndex}']`);

            charEl.classList.add("hovered");
            prevElement && prevElement.classList.add("hovered-adjacent");
            nextElement && nextElement.classList.add("hovered-adjacent");
        });
    });

    element.addEventListener("mouseleave", () => {
        removeClasses();
    });
};

text.split("").forEach((char, idx) => {
    const charEl = document.createElement('span');
    charEl.textContent = char;
    charEl.setAttribute("data-index", idx.toString());
    charEl.classList.add("hover-char");
    element.appendChild(charEl);
});

const hoverChars = [...document.getElementsByClassName('hover-char')];
addHoverListeners(hoverChars);