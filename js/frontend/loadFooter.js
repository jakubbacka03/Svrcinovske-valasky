function loadFooter() {
    return fetch('../html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(err => console.error('Chyba pri načítaní footer.html:', err));
}