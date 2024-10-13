document.addEventListener("DOMContentLoaded", function () {
    // Select form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Add submit event listener to the form
    form.addEventListener("submit", function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Retrieve and trim user inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation variables
        let isValid = true;
        let messages = [];

        // Username validation: minimum 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation: must include "@" and "."
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation: minimum 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block"; // Make the feedback div visible

        if (isValid) {
            // If validation passes, show success message
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            // If validation fails, display error messages
            feedbackDiv.innerHTML = messages.join("<br>"); // Join messages with line breaks
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
        }
    });
});
