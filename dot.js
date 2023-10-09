
function removeDot(event) {
    var inputField = event.target;
    var inputValue = inputField.value;
    var sanitizedValue = inputValue.replace(/\./g, ''); 
    inputField.value = sanitizedValue;
}


