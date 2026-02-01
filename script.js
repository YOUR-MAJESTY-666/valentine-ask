// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn
noBtn.addEventListener("mouseover", () => {
    // Randomize movement range more dynamically
    const min = 50;
    const max = 300;

    const moveX = (Math.random() - 0.5) * (max - min) * 2; // Move in both directions
    const moveY = (Math.random() - 0.5) * (max - min) * 2;

    noBtn.style.transition = "transform 0.2s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Make YES grow when you try to hit NO
    growYesButton();
});

// Logic to make YES btn to grow
let yesScale = 1;

function growYesButton() {
    yesScale += 0.2; // Increment scale
    yesBtn.style.transition = "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    yesBtn.style.transform = `scale(${yesScale})`;
}

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee! 🎉";

    // Change image to cute dance
    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    // Hide buttons smoothly
    buttons.style.opacity = "0";
    setTimeout(() => { buttons.style.display = "none"; }, 300);

    finalText.style.display = "flex";

    // Trigger confetti (simulated with emojis for simplicity without external lib)
    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.innerText = ["❤️", "✨", "🌸", "🧸", "🎀"][Math.floor(Math.random() * 5)];
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-5vh";
        confetti.style.fontSize = Math.random() * 20 + 20 + "px";
        confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
        document.body.appendChild(confetti);

        // Remove after animation
        setTimeout(() => confetti.remove(), 4000);
    }
}
