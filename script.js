// 1. Get the screen (input box)
const screen = document.getElementById("screen");

// 2. Get all buttons
const buttons = document.querySelectorAll("button");

// 3. Add a click event to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent; // The text on the button (e.g. "7", "+", "=")

        // 4. Handle the clear button
        if (value === "C") {
            screen.value = "";
        }
        // 5. Handle the equal button
        else if (value === "=") {
            try {
                screen.value = eval(screen.value); // Evaluate math expression
            } catch {
                screen.value = "Error";
            }
        }
        // 6. Otherwise, add the button's text to the screen
        else {
            screen.value += value;
        }
    });
});