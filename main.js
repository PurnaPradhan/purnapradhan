// Fetch and display the visit count
    fetch('counter.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('visit-count').innerText = data.trim();
        })
        .catch(error => {
            console.error('Error fetching visit count:', error);
        });


document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});
