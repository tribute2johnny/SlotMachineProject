
const canvas = document.getElementById('slotCanvas');

const ctx = canvas.getContext("2d");

const symbols = ["cherry", "lemon", "orange", "plum", "bell", "bar"];

const spin = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const reel1 = symbols[Math.floor(Math.Random() * symbols.length)];
    const reel2 = symbols
}