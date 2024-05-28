const deg = 6;
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();



const switchTheme = (evt) => {
    const switchBtn = evt.target;
    if (switchBtn.textContent.toLowerCase() === "light") {
        switchBtn.textContent = "dark";
        // localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        switchBtn.textContent = "light";
        // localStorage.setItem("theme", "light"); //add this
        document.documentElement.setAttribute("data-theme", "light");
    }
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme, false);

let currentTheme = "dark";

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    switchModeBtn.textContent = currentTheme;
}