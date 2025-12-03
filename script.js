// 1. Get the screen (input box)
const screen = document.getElementById("screen");

// 2. Get all buttons
const buttons = document.querySelectorAll("button");

let justCalculated = false;
let value;

// 3. Add a click event to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        value = button.textContent; // The text on the button (e.g. "7", "+", "=")
        if (justCalculated === true) {
            if (!isNaN(value)) {
                screen.value = "";
                justCalculated = false;
                screen.value += value;
            } else {
                screen.value += value;
                justCalculated = false;
            }
        } else {
            // 4. Handle the clear button
            if (value === "C") {
                screen.value = "";
            }
            // 5. Handle the equal button
            else if (value === "=") {
                try {
                    screen.value = screen.value
                        .replaceAll("÷", "/")
                        .replaceAll("×", "*");
                    screen.value = eval(screen.value); // Evaluate math expression
                    justCalculated = true;
                } catch {
                    screen.value = "Error";
                }
            }
            // 6. Otherwise, add the button's text to the screen
            else {
                screen.value += value;
            }
        }
    });
});
