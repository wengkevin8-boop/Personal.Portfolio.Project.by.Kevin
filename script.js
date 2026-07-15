/*Light and Darker Mode is when the light is on and off between the colors of black and white*/

const darkModeBtn = document.getElementById("darkModeBtn");
const btnIcon = darkModeBtn.querySelector("div");
const btnText = darkModeBtn.querySelector("span");

       
darkModeBtn.addEventListener("click", function () {
    const isLight = document.documentElement.classList.toggle("light-mode");

    if (isLight) {
        btnIcon.classList.replace("bx-sun", "bx-moon");
        btnText.textContent = "Dark Mode";
    } else {
        btnIcon.classList.replace("bx-moon", "bx-sun");
        btnText.textContent = "Light Mode";
    }
});

