let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let result = document.getElementById('result');

let plusButton = document.getElementById('plusButton');
let equalsButton = document.getElementById('equalsButton');
let clearButton = document.getElementById('clearButton');

plusButton.addEventListener('click', add);
equalsButton.addEventListener('click', add);
clearButton.addEventListener('click', clearAll);

function add() {
    let val1 = input1.value;
    let val2 = input2.value;

    if (isNaN(val1) || val1.trim().length == 0) {
        alert("숫자를 입력해주세요.");
        clearAll();
        input1.focus();
        return;
    }

    if (isNaN(val2) || val2.trim().length == 0) {
        alert("숫자를 입력해주세요.");
        clearAll();
        input2.focus();
        return;
    }

    val1 = parseInt(val1);
    val2 = parseInt(val2);

    result.value = (val1 + val2);
}

function clearAll() {
    input1.value = "";
    input2.value = "";
    result.value = "";
}
