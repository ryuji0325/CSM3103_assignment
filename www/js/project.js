document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');
    const headerToggle = document.getElementById('headerToggle');
    const mainContent = document.querySelector('.main-content');

    const toggleSidebar = () => {
        sidebar.classList.toggle('expanded');
        mainContent.classList.toggle('expanded');
    };

    toggleButton.addEventListener('click', toggleSidebar);
    headerToggle.addEventListener('click', toggleSidebar);
});
