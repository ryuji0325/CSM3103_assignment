document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const sidebar = document.getElementById('sidebar');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('expanded');
    });
});


document.getElementById('infoButton').addEventListener('click', function() {
    alert('Info button clicked');
});

function uploadImage() {
    document.getElementById('fileInput').click();
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function applyFilter() {
    alert('Apply filter (not implemented)');
}

function exportImage() {
    alert('Export image (not implemented)');
}
