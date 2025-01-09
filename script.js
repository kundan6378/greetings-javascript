// Selecting the required DOM elements
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const greetingMessage = document.getElementById('greetingMessage');
const errorMessage = document.getElementById('errorMessage');

// Adding event listener to the button
greetButton.addEventListener('click', function() {
    const name = nameInput.value.trim(); // Get the input value and trim whitespace
    
    // Clear previous messages
    greetingMessage.classList.remove('show');
    errorMessage.textContent = '';

    if (name === '') {
        // Display error message if input is empty
        errorMessage.textContent = 'Please enter your name.';
        return;
    }

    // Display greeting message with animation
    greetingMessage.textContent = `Hello, ${name}! You are most welcome.`;
    greetingMessage.classList.add('show');
});
