const inputField = document.getElementById('userInput');

inputField.addEventListener('input', () => {
    const isValid = inputField.value.length >= 3;
    inputField.classList.toggle('error', !isValid);
});