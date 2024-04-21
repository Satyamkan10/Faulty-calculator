let a = parseFloat(prompt("enter a first number"));
let b = parseFloat(prompt("enter a second number"));
let c = prompt("enter the type of calculation +,-,*,/");

if (Math.random() < 0.1) {
    // fault 
    if (c == '+') {
        const fault1 = a - b;
        document.write(fault1);
    }
    else if (c == '-') {
        let fault2 = a / b;
        document.write(fault2);
    }
    else if (c == '*') {
        let fault3 = a + b;
        document.write(fault3);
    }
    else if (c == '/') {
        let fault4 = a ** b
        document.write(fault4);
    }
}
else {
    // correct
    if (c == '+'){
        let add = a + b;
        document.write(add);
    }
    else if (c == '-') {
        let minus = a - b;
        document.write((minus));
    }
    else if (c == '*') {
        let multi = a * b;
        document.write(multi);
    }
    else if (c == '/') {
        let divide = a / b;
        document.write(divide);
    }
}
