function loadHeader() {
    return fetch('../html/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(err => console.error('Chyba pri načítaní header.html:', err));
}