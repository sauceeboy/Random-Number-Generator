const generation = document.getElementById("generation");

function gen() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let genNum = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

    generation.textContent = "Number: " + genNum;
}
