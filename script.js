// Script untuk fitur interaktif
document.addEventListener('DOMContentLoaded', function() {
    // Contoh fungsi untuk menyimpan tutorial
    const saveButtons = document.querySelectorAll('.btn-warning');
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Tutorial telah disimpan untuk nanti!');
        });
    });
});
