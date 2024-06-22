document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
    });

    // Handle tutorial button clicks
    const tutorialButtons = document.querySelectorAll('.tutorial-button');
    tutorialButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const tutorialNumber = button.dataset.tutorialNumber;
            openTutorial(tutorialNumber);
        });
    });
});

function openTutorial(tutorialNumber) {
    alert('Opening Tutorial ' + tutorialNumber);
    // Here you can add code to navigate to the specific tutorial page
    // window.location.href = `tutorial${tutorialNumber}.html`;
}
