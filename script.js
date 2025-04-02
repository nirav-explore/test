// Function to validate and store digits
function submitValue() {
    const inputElement = document.getElementById('digitInput');
    const displayElement = document.getElementById('displayValue');

    // Extract the value from the input field
    let inputValue = inputElement.value;

    // Regular expression to allow only digits
    const digitOnlyRegex = /^\d*$/;

    // Validate input and store it if valid
    if (digitOnlyRegex.test(inputValue)) {
        // If input is valid, store its value in a variable
        let storedValue = inputValue;
        displayElement.textContent = `Stored Value: ${storedValue}`;
    } else {
        // If invalid, clear the input field
        inputElement.value = '';
        displayElement.textContent = 'Please enter digits only';
    }
}
