let repeat = true;

while (repeat) {
    let a = parseFloat(prompt("Enter the first number"));
    let b = parseFloat(prompt("Enter the second number"));
    let c = prompt("Enter the type of calculation (+, -, *, /)");

    let result;

    if (Math.random() < 0.1) {
        // Fault
        if (c == '+') {
            result = a - b;
        } else if (c == '-') {
            result = a / b;
        } else if (c == '*') {
            result = a + b;
        } else if (c == '/') {
            result = a ** b;
        }
    } else {
        // Correct
        if (c == '+') {
            result = a + b;
        } else if (c == '-') {
            result = a - b;
        } else if (c == '*') {
            result = a * b;
        } else if (c == '/') {
            result = a / b;
        }
    }

    // Display the result
    document.write("Result: " + result + "<br>");

    // Ask the user if they want to perform another calculation
    let response = prompt("Do you want to perform another calculation? (yes/no)");
    if (response.toLowerCase() !== "yes") {
        repeat = false; // Exit the loop if the user does not want to repeat
    }
}
