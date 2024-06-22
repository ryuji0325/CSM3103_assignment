document.getElementById('toggleButton').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('expanded');
});

document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            document.getElementById('photoContainer').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
