export function greetUser() {
    let user = "Stranger";
    let currentTime = new Date().getHours(); // current hour (0 to 23)
    let greeting;

    if (currentTime < 12) {
        greeting = "Good Morning"
    }
    else if (currentTime < 18) {
        greeting = "Good Afternoon";
    }
    else {
        greeting = "Good Evening";
    }

    let message = greeting + ", " + user + "!";

    // add message to the site
    const greetingElement = document.createElement("p");
    greetingElement.textContent = message;
    greetingElement.style.fontWeight = "bold";
    greetingElement.style.marginTop = "16px";

    const heading = document.querySelector("header h1");
    heading.insertAdjacentElement("beforebegin", greetingElement);

};