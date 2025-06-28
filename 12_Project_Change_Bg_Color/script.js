const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        const newColor = randomColor();
        document.body.style.backgroundColor = newColor;

        const heading = document.getElementById('heading');

        // If background is white
        if (newColor.toUpperCase() === "#FFFFFF") {
            heading.classList.remove("text-white");
            heading.classList.add("text-black");
        } else {
            heading.classList.remove("text-black");
            heading.classList.add("text-white");
        }
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);
