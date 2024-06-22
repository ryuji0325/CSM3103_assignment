document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');
    const content = document.querySelector('.content');

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
        content.classList.toggle('expanded');
    });

    // Example: Adding click event listeners to each setting item
    const settingsItems = document.querySelectorAll('.settings-list li');
    settingsItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('You clicked: ' + item.textContent);
        });
    });
});

