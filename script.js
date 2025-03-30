function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    let correctAnswer = "18/11/2023";  // Change this to your actual date

    if (userAnswer === correctAnswer) {
        window.location.href = "love-letter.html";  // Redirects to a new page
    } else {
        document.getElementById("wrong-answer").classList.remove("hidden");
    }
}

function tryAgain() {
    window.location.href = "secret.html";  // Redirects back to the question page
}
