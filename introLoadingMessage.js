export function introLoadingMessage() {
    const messageElement = document.getElementById("intro-text"); 
    
    if (!messageElement) {
        console.error("#intro-text element not found for loading messages.");
        return;
    }

    const messages = [
        "Establishing Connection to Retroverse...",
        "Deploying Bytewaves...",
        "Compiling Retro Engine...",
        "Negotiating Data Tunnels...",
        "Channeling Pixelstream...",
        "sudo launch --retro-interface...",
        "boot --user Bader --mode retro...",
        "ping bader.local...",
        "node ./activate_sequence.js...",
        "./run --frontend-mode...",
        "CONNECT TO grid_network AS admin;...",
        "systemctl start bader-web.service...",
        "docker run -d frontend_bader...",
        "SELECT * FROM profile WHERE name = 'Bader'...",
        "SELECT * FROM interface WHERE glow = 'max'...",
        "npm start bader-site...",
        "exec bader-build.sh...",
        "Powering Core Memory Drive...",
        "Patching Cyberdriver.exe..."
    ];

    if (messages.length === 0) {
        messageElement.textContent = "Loading Initiated..."; // Fallback if no messages
        return;
    }

    // Display a random message
    let currentMessageIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[currentMessageIndex];

    function cycleMessage() {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        messageElement.textContent = messages[currentMessageIndex];
    }
    
    setInterval(cycleMessage, 900); // Cycle every 0.9 seconds

}