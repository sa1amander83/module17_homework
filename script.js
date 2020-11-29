// 10.3.1
let inputValue = +prompt("input your value", 0);
console.log(inputValue);
if (!isNaN(inputValue) && inputValue != 0) {
    if (typeof inputValue == "number") {
        if (inputValue % 2 == 0) {
            const message = `✅ The input value ${inputValue} is even`;
            showConsole(message, "console1");
        } else {
            const message = `✅ The input value ${inputValue} is odd`;
            showConsole(message, "console1");
        }
    }
} else {
    const message = "Opps 😵. Please, input number 🔢 not equal to 0.";
    showConsole(message, "console1");
}
