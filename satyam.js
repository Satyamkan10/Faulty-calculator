let repeat = true;

while (repeat) {
    let a = parseFloat(prompt("Enter the first number"));
    let b = parseFloat(prompt("Enter the second number"));
    let c = prompt("Enter the type of calculation (+, -, *, /)");

    if (Math.random() < 0.1) {
        // Fault
        if (c == '+') {
            const fault1 = a - b;
            document.write(fault1);
        } else if (c == '-') {
            let fault2 = a / b;
            document.write(fault2);
        } else if (c == '*') {
            let fault3 = a + b;
            document.write(fault3);
        } else if (c == '/') {
            let fault4 = a ** b;
            document.write(fault4);
        }
    } else {
        // Correct
        if (c == '+') {
            let add = a + b;
            document.write(add);
        } else if (c == '-') {
            let minus = a - b;
            document.write(minus);
        } else if (c == '*') {
            let multi = a * b;
            document.write(multi);
        } else if (c == '/') {
            let divide = a / b;
            document.write(divide);
        }
    }

    // Ask the user if they want to repeat
    let response = prompt("Do you want to perform another calculation? (yes/no)");
    if (response.toLowerCase() !== "yes") {
        repeat = false; // Exit the loop if the user does not want to repeat
    }
}
