document.addEventListener("DOMContentLoaded", function () {
    // Select all skill progress elements
    var skills = document.querySelectorAll('.skill-progress');
    // Loop through each skill progress element
    skills.forEach(function (skill) {
        var progress = skill.getAttribute('data-progress'); // Get the progress percentage
        // Create a new div for the inner progress bar
        var progressBar = document.createElement('div');
        progressBar.classList.add('skill-progress-inner'); // Add class for styling
        progressBar.style.width = '0'; // Initialize width to 0 for animation
        // Append the progress bar to the skill container
        skill.appendChild(progressBar);
        // Use a timeout to delay the animation for a better visual effect
        setTimeout(function () {
            progressBar.style.width = progress; // Set width based on the data-progress attribute
        }, 100); // Adjust the delay if needed for a staggered effect
    });
});
