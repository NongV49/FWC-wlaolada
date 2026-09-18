$("#button").click(function() {

    const a = Number($("#left").val());
    const b = Number($("#right").val());
    const op = $("#operator").val();

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        alert("Error :(");
        return;
    }

    if ((op === "/" || op === "%") && b === 0) {
        alert("It's over 9000!");
        return;
    }

    let result;

    if (op === "+") {
        result = a + b;
    } else if (op === "-") {
        result = a - b;
    } else if (op === "*") {
        result = a * b;
    } else if (op === "/") {
        result = a / b;
    } else if (op === "%") {
        result = a % b;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert("Please, use me...");
}, 30000);