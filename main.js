document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});

function showContent(id) {
    // Hide all content boxes
    document.querySelectorAll('.content .box').forEach(box => {
        box.style.display = 'none';
    });
    
    // Show the selected content box
    const contentBox = document.getElementById(id);
    if (contentBox) {
        contentBox.style.display = 'block';
}
}

