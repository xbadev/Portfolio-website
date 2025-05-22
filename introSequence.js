export function introSequence() {
  document.body.style.overflow = "hidden";

  const bootBtn = document.getElementById("boot-btn");
  const bootScreen = document.getElementById("boot-screen");
  const canvas = document.getElementById("matrix-canvas");
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");

  const ctx = canvas.getContext("2d");
  const letters = "アァイィウエエオカキクケコサシスセソタチツテトナニヌネノ";
  let fontSize = 14;
  let columns;
  let drops;
  let matrixInterval;

  function initMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  }

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  bootBtn.addEventListener("click", () => {
    canvas.style.opacity = 1;
    
    bootScreen.style.display = "none";

    initMatrix();
    matrixInterval = setInterval(drawMatrix, 22);

    // Matrix Outro begins after 4s
    setTimeout(() => {
      let fade = 1.0;
      let slowdown = 50;

      const fadeMatrix = setInterval(() => {
        fade -= 0.03; // Slower fade
        slowdown += 5;
        canvas.style.opacity = fade;

        if (fade <= 0) {
          clearInterval(matrixInterval);
          clearInterval(fadeMatrix);

          canvas.style.opacity = 0;
          intro.classList.remove("hidden");
          intro.classList.add("fade-in");

          // Show main after loading bar and intro animations
          setTimeout(() => {
            intro.classList.add("fade-out");
            
            main.style.display = "block";
         
            document.body.style.overflow = "auto";
          }, 2500); // Intro page delay before the main content is shown
        }
      }, 50); // Matrix fade-out into intro page
    }, 2000); // Matrix Outro begins after...
  });

  window.addEventListener("resize", initMatrix);
}