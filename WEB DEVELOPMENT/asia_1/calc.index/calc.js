function handleButtonClick(value) {
    const inputField = document.forms["form1"]["answer"];

    if (value === "=") {
        inputField.value = eval(inputField.value);
    } else if (value === "clear all") {
        inputField.value = "";
    } else {
        inputField.value += value;
    }
}
