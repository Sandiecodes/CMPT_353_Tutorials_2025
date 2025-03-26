import { alert, add, concat } from "../pkg/index.js"; // Import WebAssembly functions

async function run() {
    window.callAlert = () => {
        alert("Hello from WebAssembly!");
    };

    window.callAdd = () => {
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const result = add(num1, num2);
        document.getElementById('addResult').textContent = `Result: ${result}`;
    };

    window.callConcat = () => {
        const str1 = document.getElementById('str1').value;
        const str2 = document.getElementById('str2').value;
        const result = concat(str1, str2);
        document.getElementById('concatResult').textContent = `Result: ${result}`;
    };
}

run();
