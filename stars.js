export function stars() {
    const starsContainer = document.getElementById("stars");
    for (let i = 0; i < 500; i++){
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";

        //randomize twinkle duration and size
        star.style.animationDuration = (Math.random() * 3 + 2) + "s"; // [2, 5)
        star.style.animationDelay = (Math.random() * 4) + "s"; // [0, 4)

        // Random size
        const size = Math.random() * 2 + 1; // [1, 3)
        star.style.width = size + "px";
        star.style.height = size + "px";

        starsContainer.appendChild(star);
    }
}