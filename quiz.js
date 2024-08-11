// Define the function to check the answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's selected answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected
    if (userAnswerElement) {
        // Get the value of the selected answer
        const userAnswer = userAnswerElement.value;
        
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, notify the user
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
